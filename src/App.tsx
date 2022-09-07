import React, { useEffect, useMemo, useState } from 'react';
import { getUsers } from './apis';
// import logo from './logo.svg';
import './App.scss';
import Pagination from './components/Pagination';
import { User } from './types/modal';

// let PageSize = 10;
function App() {
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState<User[]>([]);

  const getResult = async (pageNum: number, pageSize: number) => {
    const users = await getUsers(pageNum - 1, pageSize)
    if (typeof users === 'object') setTableData(users.slice(0, pageSize))
    else setTableData([])
  }

  useEffect(() => {
    getResult(currentPage, pageSize)
    console.log(currentPage)
  }, [currentPage, pageSize])

  const onPageChange = (pageNum: number) => {
    if (pageNum <= 0) setCurrentPage(1);
    else setCurrentPage(pageNum)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>User Renderer</h1>
      </header>
      <main className="App-main">
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">JOB TITLE</th>
              <th scope="col">EMAIL ADDRESS</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">COMPANY</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(item => {
              return (
                <tr key={item.ID}>
                  <td scope='row' data-label="ID">{item.ID}</td>
                  <td data-label="JOB TITLE">{item.JobTitle}</td>
                  <td data-label="EMAIL ADDRESS">{item.EmailAddress}</td>
                  <td data-label="NAME">{item.FirstNameLastName}</td>
                  <td data-label="EMAIL">{item.Email}</td>
                  <td data-label="PHONE">{item.Phone}</td>
                  <td data-label="COMPANY">{item.Company}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          onPageChange={onPageChange}
          pageSize={10}
          currentPage={currentPage}
          disableNext={currentPage > 0 && tableData.length === 0}
        />
      </main>
    </div>
  );
}

export default App;
