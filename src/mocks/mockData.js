export const createMockData = overrides => ({
  "results": [{
    "gender": "male",
    "name": createMockName(),
    "location": {
      "street": {
        "number": 519,
        "name": "Malmøgata"
      },
      "city": "Stokmarknes",
      "state": "Møre og Romsdal",
      "country": "Norway",
      "postcode": "7357",
      "coordinates": {
        "latitude": "49.6084",
        "longitude": "-73.6616"
      },
      "timezone": {
        "offset": "-3:00",
        "description": "Brazil, Buenos Aires, Georgetown"
      }
    },
    "email": "asbjorn.haave@example.com",
    "login": {
      "uuid": "16508c62-302e-4713-86f7-94f36b3fa533",
      "username": "yellowladybug662",
      "password": "hawk",
      "salt": "mcj4CeoW",
      "md5": "27c353097d0b212cbf9c1366f64c2288",
      "sha1": "d478314bfdd2eacb54b6cde42a4415d4787ff03f",
      "sha256": "1f23f0bf3051021c36b0d71de122898378800bfe34a1d50a4a76d4c28d3f013d"
    },
    "dob": {
      "date": "1958-11-23T17:15:55.509Z",
      "age": 62
    },
    "registered": {
      "date": "2019-07-22T00:23:07.769Z",
      "age": 1
    },
    "phone": "57296322",
    "cell": "91749266",
    "id": {
      "name": "FN",
      "value": "23115832913"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/19.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
    },
    "nat": "NO"
  }],
  "info": {
    "seed": "538801d70fae72a2",
    "results": 1,
    "page": 1,
    "version": "1.3"
  },
  ...overrides
});

export const createMockName = overrides => ({
  "title": "Mr",
  "first": "Asbjørn",
  "last": "Haave",
  ...overrides
});