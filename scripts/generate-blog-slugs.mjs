import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'content', 'blog');
const outputFile = path.join(root, 'lib', 'blog-slugs.json');

if (!fs.existsSync(blogDir)) {
  fs.writeFileSync(outputFile, '[]');
  console.log('→ blog-slugs.json: [] (no blog dir)');
  process.exit(0);
}

const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
const slugs = files.map((file) => {
  const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
  const { data } = matter(raw);
  return data.slug;
});

fs.writeFileSync(outputFile, JSON.stringify(slugs, null, 2) + '\n');
console.log(`→ blog-slugs.json: ${slugs.length} slugs written`);
