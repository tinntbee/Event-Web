import { Button, Grid, makeStyles } from "@material-ui/core";
import { FastField, FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { storage } from "../../services/firebase";
import InputField from "./Components/InputField";
import SelectField from "./Components/SelectField";
import "./style.scss";
import { Link, useHistory } from "react-router-dom";
import { userAPI } from "../../api/userAPI";
import { useDispatch } from "react-redux";
import { snackBarActions } from "../../redux/actions/snackBarActions";
import { userAction } from "../../redux/actions/usersActions";

AccountDetail.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px 0",
  },
  field: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    "& label.Mui-focused": {
      color: "#348B9C",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#348B9C",
    },
    "& .MuiOutlinedInput-root": {
      // '& fieldset': {
      //   borderColor: 'red',
      // },
      "&:hover fieldset": {
        borderColor: "#348B9C",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#348B9C",
      },
    },
  },
}));

function AccountDetail(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const yesterday = new Date(Date.now() - 86400000);
  const [state, setState] = useState({
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/myevents-finalproject.appspot.com/o/images%2F25780c863cb1c8ef91a0.jpg?alt=media&token=51c300f4-f947-41d3-96d5-440ef2303fd0",
    avatarFile: null,
    account: {
      nickname: "",
      fullName: "",
      gender: "",
      university: "",
      faculty: "",
      studentClass: "",
      email: "",
      phone: "",
      dob: "",
      avatar: "",
    },
  });
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const INITIAL_FORM_STATE = { ...state.account };
  const FORM_VALIDATION = yup.object().shape({
    nickname: yup
      .string("Enter your nickname")
      .trim()
      .required("Nickname is required"),
    fullName: yup
      .string("Enter your full name")
      .required("Full Name is required"),
    gender: yup.string("Enter your full name").required("Password is required"),
    university: yup
      .string("Your university")
      .required("University is required"),
    faculty: yup.string("Your faculty").required("Faculty is required"),
    studentClass: yup.string("Your class").required("Class is required"),
    email: yup.string("Enter your email").email().required(),
    phone: yup
      .string("Enter your phone number")
      .matches(phoneRegExp, "Please enter your phone number")
      .trim()
      .length(10, "Please enter your phone type 10 number")
      .required(),
    dob: yup.date().max(yesterday, "please enter your day of birth").required(),
    avatar: yup.string(),
  });
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const universityOptions = [
    {
      value: "HCMUTE",
      label: "HCMUTE",
      facultyOptions: [
        {
          value: "FIT",
          label: "Information Technology",
          classOption: [
            { value: "181101A", label: "181101A" },
            { value: "181103B", label: "181103B" },
          ],
        },
        {
          value: "FIT2",
          label: "Information Technology 2",
          classOption: [
            { value: "181101A2", label: "181101A2" },
            { value: "181103B2", label: "181103B2" },
          ],
        },
      ],
    },
  ];

  const fetchUserInfo = async () => {
    const data = await userAPI
      .getAccountInfo()
      .then((data) => {
        if (data) {
          setState({
            ...state,
            avatar: data.avatar,
            account: {
              nickname: data.nickname,
              fullName: data.fullName,
              gender: data.gender,
              university: data.university,
              faculty: data.faculty,
              studentClass: data.studentClass,
              email: data.email,
              phone: data.phone,
              dob: data.dob.substring(0, 10),
              avatar: data.avatar,
            },
          });
        }
      })
      .catch((e) => {
        dispatch(
          snackBarActions.open({
            message: "Bạn cần phải đăng nhập!",
            variant: "error",
          })
        );
        dispatch(userAction.Logout());
        history.push("/login");
      });
  };

  const formik = useFormik({
    initialValues: state.account,
    validationSchema: FORM_VALIDATION,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const data = await userAPI
        .updateAccountInfo(values)
        .then((data) => {
          if (data) {
            dispatch(
              snackBarActions.open({
                message: "Đã lưu các thay đổi",
                variant: "success",
              })
            );
          }
        })
        .catch((e) => {
          dispatch(
            snackBarActions.open({
              message: "Bạn cần phải đăng nhập!",
              variant: "error",
            })
          );
          dispatch(userAction.Logout());
          history.push("/login");
        });
    },
  });

  const _onChange = (e) => {
    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (acceptedImageTypes.includes(e.target.files[0].type)) {
      setState({
        ...state,
        avatarFile: e.target.files[0],
      });

      formik.values.avatar = state.avatar;
    }
  };

  const saveFile = () => {
    if (state.avatarFile) {
      const uploadTask = storage
        .ref(`images/${state.avatarFile.name}`)
        .put(state.avatarFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(state.avatarFile.name)
            .getDownloadURL()
            .then((url) => {
              setState({
                ...state,
                avatarFile: null,
                avatar: url.toString(),
              });
            });
        }
      );
    }
  };

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="Account-detail">
      <div className="Sidebar">
        <h2 className="Title">My Account</h2>
        <ul>
          <Link to="/account-detail/information">
            <li className="active">
              <button>Account Information</button>
            </li>
          </Link>

          <Link to="/account-detail/registered-event">
            <li>
              <button>Registered Events</button>
            </li>
          </Link>
          <Link to="/account-detail/host">
            <li>
              <button>Host</button>
            </li>
          </Link>
        </ul>
      </div>
      <div className="Container">
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <div className="Container__header">
              <h3 className="Title">Account Information</h3>
            </div>
            <div className="Container__body">
              <div className="Avatar__content border-bottom">
                <h4>Avatar</h4>
                <div>
                  <img alt="" className="Avatar" src={state.avatar} />
                  <label htmlFor="upload-photo">
                    <input
                      style={{ display: "none" }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      accept="image/*"
                      onChange={_onChange}
                    />

                    <Button
                      color="secondary"
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                  <Button
                    color="secondary"
                    variant="outline"
                    onClick={saveFile}
                    disabled={!state.avatarFile}
                  >
                    Choose
                  </Button>
                </div>
              </div>
              <div className="Information__content border-bottom">
                <h4>Account detail</h4>
                <Grid container className={classes.root} spacing={2}>
                  <Grid item xs={5} className={classes.field}>
                    <FastField
                      component={InputField}
                      name="nickname"
                      label="Nickname"
                    />
                  </Grid>
                  <Grid item xs={5} className={classes.field}>
                    <FastField
                      component={InputField}
                      name="fullName"
                      label="Full name"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={2} className={classes.field}>
                    <FastField
                      component={SelectField}
                      name="gender"
                      label="gender"
                      options={genderOptions}
                    />
                  </Grid>
                  <Grid item xs={5} className={classes.field}>
                    <FastField
                      component={SelectField}
                      name="university"
                      label="University"
                      options={universityOptions}
                    />
                  </Grid>
                  <Grid item xs={5} className={classes.field}>
                    <FastField
                      component={SelectField}
                      name="faculty"
                      label="Faculty"
                      options={universityOptions[0].facultyOptions}
                    />
                  </Grid>
                  <Grid item xs={2} className={classes.field}>
                    <FastField
                      component={SelectField}
                      name="studentClass"
                      label="Class"
                      options={
                        universityOptions[0].facultyOptions[0].classOption
                      }
                    />
                  </Grid>
                  <Grid item xs={5} className={classes.field}>
                    <FastField
                      component={InputField}
                      name="email"
                      label="Email"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.field}>
                    <FastField
                      component={InputField}
                      name="phone"
                      label="Phone number"
                      type="phone"
                    />
                  </Grid>
                  <Grid item xs={3} className={classes.field}>
                    <FastField
                      component={InputField}
                      name="dob"
                      label="dob"
                      type="date"
                    />
                  </Grid>
                </Grid>
              </div>

              <div className="Linked__account border-bottom">
                <h4>Linked Account</h4>
                <p className="Input-detail">Contact you other way</p>
                <div className="Linked-contact Facebook-contact">
                  <div>
                    <img
                      className="icon"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/480px-Facebook-icon-1.png"
                    />
                    <p>Sign in with Facebook</p>
                  </div>
                  <button type="button" className="btn-outline-primary">
                    Connect
                  </button>
                </div>
                <div className="Linked-contact Facebook-contact">
                  <div>
                    <img
                      className="icon"
                      alt=""
                      src="https://vnaid.vnanet.vn/Images/google.png"
                    />
                    <p>
                      Signed in with <b>18110381@student.hcmute.edu.vn</b>
                    </p>
                  </div>
                  <button disabled="true">Disconnect</button>
                </div>
              </div>
            </div>
            <div className="Container__footer">
              <button type="submit" className="btn-default-primary">
                Save change
              </button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
}

export default AccountDetail;
