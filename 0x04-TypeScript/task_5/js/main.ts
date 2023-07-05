export interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

export interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits: number = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MajorCredits"};
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits: number = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MinorCredits" };
}

const majorSubject1: MajorCredits = { credits: 3, brand: "MajorCredits" };
const majorSubject2: MajorCredits = { credits: 4, brand: "MajorCredits" };
const minorSubject1: MinorCredits = { credits: 2, brand: "MinorCredits" };
const minorSubject2: MinorCredits = { credits: 1, brand: "MinorCredits" };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Total Major Credits:", totalMajorCredits);

const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Total Minor Credits:", totalMinorCredits);
