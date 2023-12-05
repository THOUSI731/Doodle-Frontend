import { Avatar, Box, Button, Container, Grid, Typography,TextField } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import SearchBar, { Search, StyledInputBase } from '../../Components/SearchBar';
import CardComp from '../../Components/CardComp';
import {  useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import StudentAddComp from '../../Components/StudentAddComp';
import { ToastContainer, toast } from "react-toastify";
import SpinnerComp from '../../Components/SpinnerComp';
import { useDispatch, useSelector } from 'react-redux';
import { createBatches, listBatches } from '../../Redux/Institute/InsBatches/InsBatchesListCreateAction';



const InsBatchesListCreate = () => {
  const [open,setOpen] = useState(false)
  const [search,setSearch] = useState("?")
  const dispatch = useDispatch()
  const { batches, loading } = useSelector(
    (state) => state.insBatchesListCreate
  );
  console.log(search);
  const [formData, setFormData] = useState({
    name: "",
    start_date: null,
    description: "",
  });
  let api = useAxios()  

  useEffect(() => {
    dispatch(listBatches({ api: api,search }));
  }, []);
  
  const handleSearch = () => {
    dispatch(listBatches({api:api,search:search}))
  }
  const handleSearchChange = (e) => {
    setSearch(`?search=${e.target.value}`);
    console.log(e.target.value);
    if (e.target.value === "") {
      let search = "?";
      dispatch(listBatches({ api, search }));
    }
  };
  const handleSubmit = async e => {
    e.preventDefault()
    dispatch(createBatches({api : api,values:formData,setOpen:setOpen,toast:toast,open:open}))
  }

  const handleChange = (e) => {
    const {name , value} = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <SidebarComp>
        {loading ? (
          <SpinnerComp />
        ) : (
          <>
            <ToastContainer />
            <Box>
              <Typography
                color={"#1F2D5A"}
                variant="h4"
                paddingLeft={1}
                paddingY={3}
              >
                Batches
              </Typography>
            </Box>
            <Container
              sx={{ display: "flex", alignItems: "center", marginLeft: -3 }}
            >
              <form onSubmit={handleSearch}>
                <TextField
                  onChange={handleSearchChange}
                  id="outlined-size-small"
                  value={search.slice(8)}
                  placeholder="Search..."
                  size="small"
                />
                <Button
                  sx={{ marginLeft: 1 }}
                  variant="contained"
                  type="submit"
                >
                  Search
                </Button>
              </form>
            </Container>
            {/* Add Student Button */}
            {batches.length === 0 ? (
              <>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Avatar
                    alt="No Batches Found"
                    src="/src/assets/images/NoBatches.png"
                    style={{ width: 350, height: 250, borderRadius: 0 }}
                  />
                </Container>
                <Typography marginLeft={"40vw"}>No Batches Found !</Typography>
              </>
            ) : (
              <>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {batches.map((item) => (
                    <CardComp
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                    />
                  ))}
                </Grid>
              </>
            )}

            {/* Batch Filling Form */}
            <StudentAddComp open={open} title={"Batch Form Filling"}>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Batch Name"
                  type="text"
                  variant="outlined"
                  name="name"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                />
                <h5>Start Date</h5>
                <TextField
                  id="outlined-basic"
                  name="start_date"
                  type="date"
                  value={formData.start_date}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  type="text"
                  multiline
                  variant="outlined"
                  name="description"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </form>
            </StudentAddComp>
          </>
        )}
      </SidebarComp>
    </>
  );
}

export default InsBatchesListCreate;