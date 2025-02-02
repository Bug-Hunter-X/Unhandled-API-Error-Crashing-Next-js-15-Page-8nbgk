```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the API call fails
  const data = fetch('/api/data');

  return (
    <div>
      <h1>About Page</h1>
      <p>Some information about this page.</p>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default function handler(req, res) {
  // Simulate an API call that might fail
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'API call failed' });
  } else {
    res.status(200).json({ message: 'API call successful' });
  }
}
```