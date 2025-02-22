import React, { useState } from "react";
import Project from "./Project";
import { useRouter } from "next/dist/client/router";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import PostData from "./posts.json";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DatePicker } from "jalali-react-datepicker";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormData from "react";
import * as Yup from "yup";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";

const validationSchema = Yup.object().shape({});

function Job({ searchResults }) {
  console.log({ PostData });

  const [searchInput, setSearchInput] = useState("");
  const [descriptinInput, setDescriptionInput] = useState("");
  const [file, setFile] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(new Date());
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Send = (data) => {
    // e.preventDefault();
    // console.log(searchInput)
    console.log(data);
    let formData = new FormData();
    formdata.append("searchInput", searchInput);
  };
  const [front, setFront] = useState("");

  return (
    <div className="job">
      <div className="job__left">
        <p className="job__title">ایجاد شغل جدید</p>
        <hr />
        <Formik>
          <Form>
            <div className="form">
              <div className="options">
                <Accordion
                  component={Box}
                  sx={{ my: 1 }}
                  style={{
                    width: "250px",
                    marginRight: "20px",
                    borderRadius: "20px",
                  }}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "66%", flexShrink: 0 }}>
                      قرانت اتد
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">فریمورک</FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={front}
                        onChange={(e) => {
                          setFront(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          value="React"
                          control={<Radio />}
                          label="React"
                        />
                        {front === "React" ? (
                          <RadioGroup>
                            <FormControlLabel
                              component={Box}
                              sx={{ mx: 3 }}
                              style={{ fontSize: "40px" }}
                              value="js"
                              control={<Radio />}
                              label="java script"
                            />
                            <FormControlLabel
                              component={Box}
                              sx={{ mx: 3 }}
                              value="ts"
                              control={<Radio />}
                              label="Type script"
                            />
                          </RadioGroup>
                        ) : (
                          <></>
                        )}
                        <FormControlLabel
                          value="Angular"
                          control={<Radio />}
                          label="Angular"
                        />
                        <FormControlLabel
                          value="Vue"
                          control={<Radio />}
                          label="Vue"
                        />
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  component={Box}
                  sx={{ my: 1 }}
                  style={{
                    width: "250px",
                    marginRight: "20px",
                    borderRadius: "20px",
                  }}
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      بک اند
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    width: "250px",
                    marginRight: "20px",
                    borderRadius: "20px",
                  }}
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      گرافیک
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  component={Box}
                  sx={{ my: 1 }}
                  style={{
                    width: "250px",
                    marginRight: "20px",
                    borderRadius: "20px",
                  }}
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      طراحی
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="job__input">
                <div className="input__top">
                  <h3>عنوان</h3>
                  <hr />
                  {searchInput}
                  <Field
                    type="text"
                    valu={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </div>
                <div className="input__middle">
                  <h3>توضیحات</h3>
                  <hr />
                  <Field
                    type="text"
                    value={descriptinInput}
                    onChange={(e) => setDescriptionInput(e.target.value)}
                  />
                </div>
                <div className="input__bottom">
                  <input
                    className="input__file"
                    type="file"
                    value={file}
                    id="first"
                    onChange={(e) => setFile(e.target.value)}
                  />
                  <p>برای انتخاب فایل ضربه بزنید</p>
                  <label htmlFor="first">
                    <FileUploadOutlinedIcon />
                  </label>
                </div>
                <div className="input__bottom2">
                  <Field
                    type="text"
                    placeholder="فرصت انجام کار"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <Field
                    type="text"
                    placeholder="قیمت "
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <Button
                  style={{ marginRight: "30px" }}
                  variant="contained"
                  color="inherit"
                  onClick={handleClickOpen}
                >
                  حضوری
                </Button>
                <Dialog open={open} onClose={handleClose} dir="rtl">
                  <DialogTitle>حضوری</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      روز و زمان را انتخاب کنید
                    </DialogContentText>
                    <DatePicker
                      onClickSubmitButton={(value) =>
                        console.log("value ", value.value)
                      }
                    />
                    <div dir="rtl">
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        placeholder="آدرس"
                        variant="standard"
                      />
                    </div>
                    <TextField
                      dir="rtl"
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="شماره همراه"
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>لغو</Button>
                    <Button onClick={handleClose}>ایجاد</Button>
                  </DialogActions>
                </Dialog>
                <div className="submit">
                  <Button onClick={Send} className="btn">
                    ارسال کن
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="job__right">
        <p className="job__title"> لیست شغل ها</p>
        <hr />

        <Project des="" price="سه میلیون تومان" time="هفت روز" />
        <Project des="" price="پانصد هزار تومان" time="شش روز" />
        <Project des="" price="دو میلیون تومان" time="پنج روز" />
        <Project des="" price="یک میلیون تومان" time="ده روز" />
      </div>
    </div>
  );
}

export default Job;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
