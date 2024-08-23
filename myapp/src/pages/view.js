import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { config } from '../config';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../components/header';
// import { CSVLink } from 'react-csv';



export default function View() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setalert] = useState(false);
  const [show, setShow] = useState(false);
  const [del, setdel] = useState(false);
  const [row, setrow] = useState(false);
  const [filterText, setFilterText] = useState('');


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Calculate the starting index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;


  const handleClose = () => setShow(false);

  const api = config.apiurl;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}/show`);
        setData(response.data);

        console.log(data, "data")
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
      finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  const handleDelete = async () => {
    setShow(false);

    setData([...data.filter((item) => item._id !== row._id)])
    try {
      setalert(true);
      setTimeout(() => {
        setalert(false);
      }, 2000);
      const response = await axios.delete(`${api}/delete/${row._id}`); // Assuming delete API endpoint takes the ID

    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  const delefun = (row) => {
    setdel(true);
    setShow(true);
    setrow(row);
  }

  const columns = [
    {
      name: 'S.No',
      selector: (row, index) => startIndex + index + 1,
      sortable: true,
    },
    {
      name: 'Booked date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Check in',
      selector: (row) => (row.checkin ? row.checkin : ''),
      sortable: true,
    },
    {
      name: 'Check out',
      selector: row => row.checkout,
      sortable: true,
    },
    {
      name: 'People',
      selector: row => row.people,
      sortable: true,
    },
    {
      name: 'Family or friends',
      selector: row => row.familyorfriends,
      sortable: true,
    },
    {
      name: 'Budget',
      selector: row => row.budget,
      sortable: true,
    },
    {
      name: 'Action',
      selector: (row) => (
        <button className='butn px-2'
          onClick={() => delefun(row)}>Delete</button>
      ),

    },
  ];


  const filteredItems = data.filter((item) => {
    return (
      // (item.sno && item.sno.toString().includes(filterText.toString())) ||
      (item.date && item.date.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.checkin && item.checkin.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.checkout && item.checkout.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.people && item.people.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.familyorfriends && item.familyorfriends.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.budget && item.budget.toLowerCase().includes(filterText.toLowerCase()))
    );
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setFilterText(value);
  };


  // const downloadCSV = (data) => {
  //   const csvHeaders = [
  //     { label: 'checkout', key: 'checkout' },
  //     { label: 'checkin', key: 'checkin' },
  //   ];

  //   const csvData = data.map(row => ({
  //     name: row.checkin,
  //     age: row.checkout,
  //   }));

  //   const csvLink = document.createElement('a');
  //   csvLink.href = `data:text/csv;charset=utf-8,${encodeURI(
  //     `${csvHeaders.map(header => header.label).join(',')}\n${csvData.map(row => `${row.name},${row.age},${row.email}`).join('\n')}`
  //   )}`;
  //   csvLink.download = 'data.csv';
  //   csvLink.click();
  // };


  // const actionsMemo = React.useMemo(() =>
  //  <button className="btn btn-primary mb-3" onClick={() => downloadCSV(data)}>
  //     Download CSV
  //  </button>, []);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Slice the data for the current page
  const paginatedData = filteredItems.slice(startIndex, startIndex + itemsPerPage);
  // const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  // Handle per-page change
   const handlePerRowsChange = newPerPage => {
    setItemsPerPage(newPerPage);
  };
  return (
    <>
      <Navbar />
      <div className='pt-4'></div>
      <div className='container pt-5'>
        <div className='d-flex flex-wrap gap-2 mb-3 algin-items-center justify-content-between'>
          <h2>Booking List</h2>

          <div class="input-group w-auto">
            <div className='srch' >
              <input type="text" className='form-control' value={filterText} onChange={handleSearch} placeholder="Search" />
            </div>
            <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
          </div>

        </div>
        {/* <div>srch:{filterText},filteredItems.length: {filteredItems.length},itemsPerPage:{itemsPerPage},currentPage:{currentPage}</div> */}
      
        <div className='v_tab' >
          {isLoading ? (
            <div className='d-flex justify-content-center align-items-center py-4'>
              <div class="loader"></div>
            </div>
          ) : (
            <div>
              <DataTable
                columns={columns}
                data={paginatedData}
                highlightOnHover
                striped
                responsive
                pagination
                paginationTotalRows={filteredItems.length}
                

                onChangePage={handlePageChange}
                paginationServer
                paginationPerPage={itemsPerPage}
                // paginationDefaultPage={filteredItems.length < itemsPerPage ? 1 : currentPage}
                onChangeRowsPerPage={handlePerRowsChange}

              />
            </div>
          )}
        </div>

      </div>


      <div className={`topfix ${alert ? "topto" : ""}`} >Deleted successful</div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center'>
            <button className='butn' onClick={handleDelete} >delete</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

