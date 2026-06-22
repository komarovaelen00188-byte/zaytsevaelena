import sodium from 'tweetsodium';
import { readFileSync } from 'fs';

const TOKEN = process.env.GH_TOKEN;
const REPO = "komarovaelen00188-byte/zaytsevaelena";
const KEY_ID = "3380204578043523366";
const PUB_KEY = "bUH2JhfBdT08rCremmZ0NQCGc78KE1PxfBWBR2z6EHk=";

const PRIVATE_KEY = process.env.VPS_SSH_KEY;

function encrypt(value) {
  const key = Buffer.from(PUB_KEY, 'base64');
  const msg = Buffer.from(value);
  const encrypted = sodium.seal(msg, key);
  return Buffer.from(encrypted).toString('base64');
}

async function setSecret(name, value) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/actions/secrets/${name}`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ encrypted_value: encrypt(value), key_id: KEY_ID }),
  });
  if (res.status === 201 || res.status === 204) {
    console.log(`✅ Secret ${name} set`);
  } else {
    console.log(`❌ ${name}: ${res.status} ${await res.text()}`);
  }
}

await setSecret("VPS_HOST", "72.56.232.5");
await setSecret("VPS_USER", "root");
await setSecret("VPS_SSH_KEY", PRIVATE_KEY);
console.log("Done!");
