import {
  Grid,
  makeStyles,
  Slide,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { FastField, FormikProvider, useFormik } from "formik";
import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/js/plugins/fullscreen.min.js"
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
// Require Editor JS files.
import "froala-editor/js/plugins.pkgd.min.js";
import React, { useEffect, useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import * as yup from "yup";
import CustomDateTimePicker from "../../../components/CustomDateTimePicker";
import InputField from "../../AccountDetail/Components/InputField";
import SelectField from "../../AccountDetail/Components/SelectField";

PartDescription.propTypes = {};
const useStyles = makeStyles((theme) => ({
  snackBar: {
    background: "var(--primary-color-blue)",
  },
  root: {
    flexGrow: 1,
    margin: "10px 0",
  },
  root_2: {
    flexGrow: 1,
    margin: "10px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  field: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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

function PartDescription(props) {
  const { state, setStateParent, submitFormRef, handleNextClick } = props;
  const yesterday = new Date(Date.now());

  function formatDate(date) {
    return (
      new Date(date).toLocaleDateString() +
      " " +
      new Date(date).toLocaleTimeString()
    );
  }
  const classes = useStyles();

  const [link, setLink] = useState({
    nameGroup: "",
    nameEvent: "",
    more: "",
  });

  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    vertical: "bottom",
    horizontal: "right",
  });

  const handleModelChange = (model) => {
    setStateParent({ ...state, data: { ...state.data, description: model } });
    formik.values.description = model;
  };

  const INITIAL_FORM_STATE = {
    participant: "HCMUTE",
    dayBegin: state.data.dayBegin,
    dayEnd: state.data.dayEnd,
    link: state.data.link,
    description: state.data.description,
  };

  const FORM_VALIDATION = yup.object().shape({
    participant: yup.string().required(),
    dayBegin: yup
      .date()
      .required(),
    dayEnd: yup
      .date()
      .min(
        yup.ref("dayBegin"),
        ({ min }) => `Date needs to be after ${formatDate(min)}!!`
      )
      .required(),
    link: yup.string(),
    description: yup.string(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: INITIAL_FORM_STATE,
    validationSchema: FORM_VALIDATION,
    onSubmit: (values) => {
      handleNextClick();
    },
  });

  const handleCopyLinkClick = (e) => {
    if (e.target.value) {
      const el = document.createElement("textarea");
      el.value = e.target.value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      setAlertState({
        ...alertState,
        open: true,
        message: "Đã sao chép vào bộ nhớ tạm",
      });
      document.body.removeChild(el);
    }
  };

  const handleSnackbarClose = () => {
    setAlertState({ ...alertState, open: false });
  };

  const handleNameGroupOnChange = (e) => {
    setLink({ ...link, nameGroup: e.target.value.replace(" ", "") });
  };
  const handleNameEventOnChange = (e) => {
    setLink({ ...link, nameEvent: e.target.value.replace(" ", "") });
  };
  const handleMoreOnChange = (e) => {
    setLink({ ...link, more: e.target.value.replace(" ", "") });
  };

  useEffect(() => {
    formik.values.link =
      "http://myevent/e/" +
      link.nameEvent +
      "." +
      link.nameGroup +
      "." +
      link.more;
  }, [link]);

  return (
    <div className="part part-description">
      <div className="description">
        <p>Mô tả</p>
        <FroalaEditor
          className="editor"
          tag="textarea"
          model={state.data.description}
          onModelChange={handleModelChange}
        />
      </div>
      <div className="information">
        <p className="label-field">Thông tin</p>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12} className={classes.field}>
                <FastField
                  component={SelectField}
                  name="participant"
                  label="Đối tượng tham gia tham gia"
                  options={[{ value: "HCMUTE", label: "Sinh viên HCMUTE" }]}
                />
              </Grid>
            </Grid>
            <p className="label-field">Thời gian tổ chức</p>
            <Grid container className={classes.root_2} spacing={2}>
              <Grid item xs={12} className={classes.field}>
                <p className="date-label">Bắt đầu: </p>
                <FastField
                  component={InputField}
                  type="datetime-local"
                  name="dayBegin"
                  label="Ngày Giờ"
                />
              </Grid>
            </Grid>
            <Grid container className={classes.root_2} spacing={2}>
              <Grid item xs={12} className={classes.field}>
                <p className="date-label">Kết thúc: </p>
                <FastField
                  component={InputField}
                  name="dayEnd"
                  type="datetime-local"
                  label="Ngày Giờ"
                />
              </Grid>
            </Grid>
            <div className="title-container">
              <p className="label-field">Link sự kiện: </p>
              <p>
                <i>Bỏ qua nếu muốn hệ thống tự cấp ID</i>
              </p>
            </div>
            <Grid container className={classes.root_2} spacing={2}>
              <Grid
                item
                xs={12}
                className={classes.field + "hello"}
                onClick={handleCopyLinkClick}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={
                    "http://myevent/e/" +
                    link.nameGroup +
                    "." +
                    link.nameEvent +
                    "." +
                    link.more
                  }
                  type="text"
                  disabled
                  name="link"
                  label=""
                  placeholder="http://myevent/e/name-group.name-event.more"
                />
              </Grid>
            </Grid>
            <Grid container className={classes.root_2} spacing={2}>
              <Grid item xs={4} className={classes.field}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  label="name-group"
                  value={link.nameGroup}
                  type="text"
                  onChange={handleNameGroupOnChange}
                />
              </Grid>
              <Grid item xs={4} className={classes.field}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  label="name-event"
                  type="text"
                  value={link.nameEvent}
                  onChange={handleNameEventOnChange}
                />
              </Grid>
              <Grid item xs={4} className={classes.field}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  label="more"
                  value={link.more}
                  type="text"
                  onChange={handleMoreOnChange}
                />
              </Grid>
            </Grid>
            <button ref={submitFormRef}>submut</button>
          </form>
        </FormikProvider>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: alertState.vertical,
          horizontal: alertState.horizontal,
        }}
        ContentProps={{
          classes: {
            root: classes.snackBar,
          },
        }}
        autoHideDuration={4000}
        open={alertState.open}
        onClose={handleSnackbarClose}
        message={alertState.message}
        key={alertState.vertical + alertState.horizontal}
      />
    </div>
  );
}

export default PartDescription;
