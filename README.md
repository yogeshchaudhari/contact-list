# **Introduction**
This application is used for rendering contacts which are stored in a file using various NodeJs packages like ReactJs, React-Redux, Redux-Saga, Material UI, etc.

# **Getting Started**
To Install the required packages run the command
```
    npm install
```
  Once the packages are installed, the application is ready for testing and running

# **Tests**
Tests cases have been added for testing the Reducers as well as UI Components.
The framework used for testing is Jest.
All the test cases can be executed by running the command
```
    npm test
```

# **Running the Application**
Application can be started using the command
```    
    npm start
```
When the command is executed, a react server starts locally which listens on the port 3000.
A new browser window should automatically open at the url "http://localhost:3000"

# **Working**

## **Data Store**
React Redux is used for managing the state of the application. All the globally required data is added to the redux state and is provided to the Components that subscribe to the Redux store.
The reducers required for redux have been tested using Jest.

## **Initial State**
The initial state of the application is populated with the contacts that are fetched from the json file.
The file is fetched using the Fetch API from the server that serves the react app. The contacts.json file is added in the public/ directory of the project. It can be loaded from the url "http://localhost:3000/contacts.json"
Once the contacts are fetched from the file, the data is stored in the Redux store and operations are performed on the data locally. Server side data manipulation is not present in the project.

## **Redux Saga**
Redux Saga is used in the application for handling asynchronous operations like
 - fetching the contacts.json file using Fetch API
 - Adding a debounce while searching for contacts
 - Filtering the contacts from the main contacts list using the search term

Debounce time of 1000 miliseconds has been added.
The url of the file to be fetched is hardcoded in the sagas.

## **Search**
The data loaded initially is Sorted according to the first name of the contacts.
Whenever a search term is typed, the contacts are filtered and sorted according to the term frequency of the search term. The fields that are searchable are
  - First Name
  - Last Name
  - Job Title
  - Company
  - Email

## **Material UI**
Contacts list and contact details are rendered using the components provided by Material UI.

## **Compatibility**
The UI of the application is responsive. The contacts can be accessed and viewed on small as well as large screen. Just the basic responsiveness have been implemented and it can be improved.

# **Todos**
 - UI beautification
 - Improvement in the Responsive css