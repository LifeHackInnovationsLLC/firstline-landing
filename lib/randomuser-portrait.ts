/**
 * Deterministic portrait URLs using randomuser.me stock portraits
 * (same family as the Firstline dashboard seed script: men/{n}.jpg, women/{n}.jpg).
 */

const PORTRAIT_INDEX_MAX = 99;

/** FNV-1a 32-bit — stable across runs for the same seed string */
function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Common first names → women/men buckets; unlisted names use parity fallback */
const FEMALE_FIRST_NAMES = new Set(
  [
    "sarah",
    "emily",
    "jessica",
    "rachel",
    "nina",
    "lisa",
    "mary",
    "jennifer",
    "ashley",
    "amanda",
  ].map((n) => n.toLowerCase()),
);

const MALE_FIRST_NAMES = new Set(
  [
    "michael",
    "david",
    "james",
    "john",
    "alex",
    "tom",
    "chris",
    "robert",
    "daniel",
  ].map((n) => n.toLowerCase()),
);

function portraitCategory(
  firstName: string,
  stableKey: string,
): "men" | "women" {
  const lower = firstName.toLowerCase();
  if (FEMALE_FIRST_NAMES.has(lower)) return "women";
  if (MALE_FIRST_NAMES.has(lower)) return "men";
  return hashString(stableKey) % 2 === 0 ? "men" : "women";
}

/**
 * Returns a stable randomuser.me portrait URL for a display name (or any seed).
 * Uses first-name heuristics when possible, otherwise hash parity (dashboard-style).
 */
export function getRandomUserPortraitUrl(seed: string): string {
  const trimmed = seed.trim();
  const first = trimmed.split(/\s+/)[0] ?? trimmed;
  const category = portraitCategory(first, trimmed);
  const index = hashString(trimmed) % (PORTRAIT_INDEX_MAX + 1);
  return `https://randomuser.me/api/portraits/${category}/${index}.jpg`;
}
