# json-server

![JSON-SERVER](https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2507&q=80)


## Description

JSON Server is a node package that helps you to expose a REST API from a JSON file

## Installation

```bash
npm install json-server
```

### Creation of a sample JSON file

Let's create a **db.json** file as follow:

```json
{
  "users": [
    { "id": "1",
      "lastName": "Trump",
      "firstName": "Donald"
    },
    {
      "id": "2",
      "lastName": "Biden",
      "firstName": "Joe"
    }
  ],
  "posts": [
    { "id": 1,
      "authorId": "1",
      "title": "Quote of the day",
      "content": "A great day for America"
    }
  ]
}
```

### Start the json-server

We use the **npx** to start a JSON Server

```bash
npx json-server db.json
```

#### Result

![run json-server result](pictures/json-server-result.png)

#### Test the json server

Let's use **curl** tool to test the API

```bash
curl http://localhost:3000/users
```

![curl GET users result](picture/../pictures/curl1.png)