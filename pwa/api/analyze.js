export const runtime = 'edge';

export async function POST(req) {
  const { image } = await req.json();
  
  if (!image) {
    return Response.json({ error: 'No image provided' }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) throw new Error('Missing GEMINI_API_KEY');
  
  const prompt = `Analyze this receipt image and extract:
1. Amount (just the number, in dollars)
2. Date (in YYYY-MM-DD format)
3. Description (what was purchased, max 3 words)

Return ONLY a JSON object like:
{"amount": 125.50, "date": "2026-04-13", "description": "Council Rates"}

If you can't read the amount, date or description, use "0" for amount, today's date for date, and "Unknown" for description.`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            inlineData: {
              mimeType: image.split(',')[1].split(';')[0] || 'image/jpeg',
              data: image.split(',')[1]
            }
          }, { text: prompt }]
        }]
      })
    });

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    
    // Extract JSON from response
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      const result = JSON.parse(match[0]);
      return Response.json(result);
    }
    
    return Response.json({ amount: 0, date: new Date().toISOString().split('T')[0], description: 'Unknown' });
  } catch (e) {
    return Response.json({ amount: 0, date: new Date().toISOString().split('T')[0], description: 'Error reading receipt' });
  }
}