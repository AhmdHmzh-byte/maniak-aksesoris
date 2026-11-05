"""Create a clean static artifact without documentation, tests, or personal data."""
import re
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parent.parent
output = root / 'artifacts' / 'maniak-aksesoris.zip'
output.parent.mkdir(exist_ok=True)
files = [root / 'index.html']
for directory in ('css', 'js'):
    files.extend(path for path in (root / directory).rglob('*') if path.is_file())
references = '\n'.join(path.read_text(encoding='utf-8') for path in files)
assets = set(re.findall(r'assets/images/[\w.-]+\.(?:svg|webp|avif|png|jpg)', references))
assets.update(re.findall(r'image/[\w.-]+\.(?:png|jpe?g|webp|avif)', references))
missing = sorted(asset for asset in assets if not (root / asset).is_file())
if missing:
    raise FileNotFoundError(f'Missing referenced assets: {", ".join(missing)}')
files.extend(root / asset for asset in sorted(assets))
with ZipFile(output, 'w', ZIP_DEFLATED) as archive:
    for path in sorted(files):
        archive.write(path, path.relative_to(root))
print(f'Paket statis: {output.relative_to(root)} ({len(files)} berkas)')
