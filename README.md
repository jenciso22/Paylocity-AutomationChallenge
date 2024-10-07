# Automated framework for Paylocity

This is a Test Automation Framework for the Paylocity Application. It covers Functional Tests and API tests.

## Tools to Automate

* TestCafe

### Prerequisites

* Nodejs
* NPM

### Setting up

Clone the repo and run the following command in order to install the dependencies:

```
npm install
```

## Running the tests

Go to the `package.json` and search for the testcafe scripts (i.e. test:chrome). In order to run them you can use npm as follows:

### Running API tests:

```
npm run test:api
```

### Running ALL functional tests:

```
npm run test
```

### Running per browser:

```
npm run test:chrome
```

```
npm run test:safari
```

### Running per feature:

```
npm run test:login
```

```
npm run test:addemployee
```

```
npm run test:updateemployee
```

```
npm run test:deleteemployee
```

### Running Smoke testing:

```
npm run test:smoke:testing
```

### Running tests with Reports:
```
npm run test:report:html
```

```
npm run test:report:json
```

```
npm run test:report:xunit
```

```
npm run test:report:list
```

TestCafe will be automatically executed using your local chrome/safari/firefox version installed in your machine and will perform all the tests specified in the command.

Note: If no specific tests are specified, it will run all the tests inside the folder selected in the script.


## Built With

* [TestCafe](https://testcafe.io/) - The Functional Automation used for Web/FE

.