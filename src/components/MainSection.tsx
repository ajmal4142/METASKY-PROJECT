import {
  Box,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState, ChangeEvent, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeUserDetails } from "../utils/auth";

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  login: {
    username: string;
  };
  email: string;
  dob: {
    age: number;
    date: string;
  };
  location: {
    country: string;
    city: string;
    postcoad: number;
    state: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  phone: string;
}

const MainSection: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [lastIndex, setLastIndex] = useState<number>(50);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedNumber, setSelectedNumber] = useState<number>(100);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${selectedNumber}`)
      .then((data) => {
        console.log(data.data.results);
        setUsers(data.data.results);
        setFilteredUsers(data.data.results.slice(0, lastIndex));
      })
      .catch((err) => console.log(err));
  }, [lastIndex, selectedNumber]);

  useEffect(() => {
    console.log(selectedNumber);
    console.log(users);
  }, [selectedNumber, users]);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleSeeMore = () => {
    setLastIndex(lastIndex + 50);
  };

  const filteredUsersMemo = useMemo(() => {
    return users
      .filter((user) => {
        const fullName =
          `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase();
        const username = user.login.username.toLowerCase();
        const email = user.email.toLowerCase();
        const gender = user.gender.toLowerCase();
        const country = user.location.country.toLowerCase();
        const phone = user.phone.toLowerCase();
        return (
          fullName.includes(search.toLowerCase()) ||
          username.includes(search.toLowerCase()) ||
          email.includes(search.toLowerCase()) ||
          country.includes(search.toLowerCase()) ||
          gender.includes(search.toLowerCase()) ||
          phone.includes(search.toLowerCase())
        );
      })
      .slice(0, lastIndex);
  }, [users, search, lastIndex]);

  const handleRowClick = (user: User) => {
    dispatch(storeUserDetails(user));
    navigate(`/personaldetails/${user.login.username}`);
  };

  const styles = {
    mainSection: {
      backgroundColor: "#ffffff",
      padding: "0px 20px 20px 20px",
      height: filteredUsers?.length <= 14 ? "100vh" : "",
    },
    inputField: {
      width: "27%",
      "@media(max-width:1100px)": {
        width: "35%",
      },
      "@media(max-width:539px)": {
        width: "50%",
      },
    },
    resultBox: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      borderBottom: "solid 2px rgba(128 ,127, 127,0.3) ",
    },
    header: {
      fontWeight: "500",
      alignSelf: "center",
      "@media(max-width:1000px)": {
        fontSize: "23px",
      },
      "@media(max-width:539px)": {
        fontSize: "19px",
      },
    },
    seeMore: {
      display: filteredUsers.length >= lastIndex ? "flex" : "none",
      width: "120px",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      border: "1px solid ",
      borderRadius: "10px",
      cursor: "pointer",
      ":hover": {
        background: "#e0dede",
      },
    },
    circularProgress: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cardContainer: {
      my: "20px",
      display: "flex",
      gap: "20px",
      justifyContent: "flex-start",
      overflowX: "auto",
      width: "100%",
      overflowY: "hidden",
      ml: "5px",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    cardContent: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    card: {
      width: "150px",
      cursor: "pointer",
      overflow: "visible",
      border: "0.5px solid rgba(0, 0, 0, 0.6)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translatex(5px)",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  };

  return (
    <>
      {filteredUsers?.length !== 0 ? (
        <Box sx={styles.mainSection}>
          <Box sx={styles.resultBox}>
            <Box textAlign="center" display="flex" gap="10px">
              <Typography variant="h6" sx={styles.header}>
                No of users : {selectedNumber}
              </Typography>
              <select
                style={{ height: "25px", alignSelf: "center" }}
                value={selectedNumber}
                onChange={(e) => setSelectedNumber(Number(e.target.value))}>
                <option>100</option>
                <option>200</option>
                <option>300</option>
                <option>400</option>
                <option>500</option>
                <option>600</option>
                <option>700</option>
                <option>800</option>
                <option>900</option>
                <option>1000</option>
              </select>
            </Box>
            <TextField
              sx={styles.inputField}
              id="outlined-textarea-username"
              label="Search here"
              variant="outlined"
              placeholder="eg: name  "
              value={search}
              onChange={handleSearchInput}
              autoComplete="off"
            />
          </Box>

          {/* End of Search container */}
          <Typography
            variant="h5"
            sx={{
              fontSize: "20px",
              color: "rgba(0,0,0,0.6)",
              p: "10px 10px 0px 10px",
            }}>
            From India
          </Typography>
          <Box sx={styles.cardContainer}>
            {users
              ?.filter((user) => user.location.country === "India")
              .map((user, index) => (
                <Card
                  key={user.phone}
                  sx={styles.card}
                  onClick={() => handleRowClick(user)}
                  className="card">
                  <CardMedia
                    component="img"
                    height="150"
                    image={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                  />
                  <CardContent sx={{ gap: "10px" }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={styles.cardContent}>
                      {`${user.name.title} ${user.name.first} ${user.name.last}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={styles.cardContent}>
                      {user.login.username}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={styles.cardContent}>
                      {user.location.country}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
          </Box>

          {/* End of Card container */}

          <TableContainer
            component={Paper}
            sx={{ marginBottom: "20px", background: "rgba(218,218,218,0.5)" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Contact Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsersMemo?.slice(0, lastIndex)?.map((row, index) => (
                  <TableRow
                    key={row.phone}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      cursor: "pointer",
                      ":hover": {
                        background: "linear-gradient(to right,#cdcdcd,#ffffff)",
                      },
                    }}
                    onClick={() => handleRowClick(row)}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {`${row.name.title} ${row.name.first} ${row.name.last}`}
                    </TableCell>
                    <TableCell>{row.login.username}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.location.country}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={styles.seeMore} onClick={handleSeeMore}>
            <KeyboardArrowDownIcon />
            <Typography variant="h6" fontSize="16px">
              See More
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.circularProgress}>
          <CircularProgress sx={{ width: "75px", height: "75px" }} />
        </Box>
      )}
    </>
  );
};

export default MainSection;
