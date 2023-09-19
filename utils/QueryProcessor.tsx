export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "My Andrew Id is lmarinov!"
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return (
      "lara"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const maxMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (maxMatch) {
    const x: number = parseInt(maxMatch[1]);
    const y: number = parseInt(maxMatch[2]);
    const z: number = parseInt(maxMatch[3]);
    return (x > y ? x : y > z ? y : z).toString();
  }

  const multMatch = query.match(/What is (\d+) multipled by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x * y).toString();
  }

  return "";
}
