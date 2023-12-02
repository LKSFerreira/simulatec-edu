test("Get em /api/v1/status deveria retornar status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("Get em /api/v1/status deveria retornar status 404", async () => {
  const response = await fetch("http://localhost:3000/api/v1/no-endpoint");
  console.log(response.statusText);
  expect(response.status).toBe(404);
});
