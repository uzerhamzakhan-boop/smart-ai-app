import { test, expect } from "@playwright/test";

test("API returns error when question is missing", async ({ request }) => {
  const res = await request.post("http://localhost:3000/api/ask", {
    data: {},
  });

  const body = await res.json();

  expect(body.error).toBe("Question is required");
});