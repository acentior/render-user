import { getUsers } from ".";

it('first 10 users', async () => {
  let users = await getUsers(0, 10).catch((reason: any) => console.log(reason))
  expect(typeof users).toEqual("object")
  expect(typeof users === 'object' && users.length).toBeGreaterThan(1)
})

it('10000000th 10 users', async () => {
  let users = await getUsers(10000000, 10).catch((reason: any) => console.log(reason))
  expect(typeof users).toEqual("string")
})


it('index < 0', async () => {
  let users = await getUsers(-1, 10).catch((reason: any) => console.log(reason))
  expect(typeof users).toEqual("object")
  expect(typeof users === 'object' && users.length).toEqual(0)
})