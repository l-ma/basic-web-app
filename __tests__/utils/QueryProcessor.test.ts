import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id text', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My Andrew Id is lmarinov!"
          ));
    });

    test('should answer name', () => {
      const query = "What is your name?";
      const response: string = QueryProcessor(query);
      expect(response).toBe((
          "lara"
        ));
    });

    test('86', () => {
      const query = "Which of the following numbers is the largest: 48, 86, 51?";
      const response: string = QueryProcessor(query);
      expect(response).toBe((
          "86"
        ));
    });

    test('should add numbers', () => {
      expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
      expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should multiply numbers', () => {
      expect(QueryProcessor("What is 5 multiplied by 5?")).toEqual("25");
    });

    test('sqr cube', () => {
      expect(QueryProcessor("Which of the following numbers is both a square and a cube: 1302, 3784, 2401, 2211, 4096, 1, 448?")).toEqual("3784");
    });
});