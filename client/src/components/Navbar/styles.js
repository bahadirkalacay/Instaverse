import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "20px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
   
    // backgroundColor: '#efefef',
  },

  heading: {
    color: "rgba(0, 183, 255, 1)",
    fontWeight: '400',
    textTransform: 'uppercase',
    textDecoration: "none",
    fontSize:"35px"
  },
  image: {
    marginLeft: "15px",
    // margin: '10px 0 10px 15px',
    height: "75px",
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },

  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    
  },

  userName: {
    display: "flex",
    alignItems: "center",
    textAlign:"center",
    marginLeft:"0.5em",
    marginRight:"0.5em",
    color: "rgb(35, 25, 85)",

    
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: "white",
    backgroundColor: "rgba(0, 183, 255, 1)",
  },
  "@media(max-width:900px)":{
    heading:{
        fontSize:"30px"
    },
    image:{
        height:"3em"
    }
  },


  "@media(max-width:700px)": {
    appBar:{
        width:"95%"
    },
    heading:{
        fontSize:"20px"
    },
    image:{
        width:"7em",
        height:"3em",
        marginLeft:"5px"
    },
    logout:{
        height:"2.5em",
        marginLeft:"1em"
    },
    userName:{
        display:"none"
    }
  
  },


  "@media(max-width:550px)":{
    heading:{
        display:"none"
    },
    image:{
        marginLeft:"0"
    }
  }
}));
