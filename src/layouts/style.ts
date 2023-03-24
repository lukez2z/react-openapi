import { createStyles, css } from 'antd-style';

export default createStyles(({ token }) => ({

  mainLayout: {
    background: "linear-gradient(110.6deg, rgb(156, 116, 129) -18.3%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)",
    height: '100vh',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    "@keyframes gradient": {
      "0%": {
        backgroundPosition: "0% 50%"
      },
      "50%": {
        backgroundPosition: "100% 50%"
      },
      "100%": {
        backgroundPosition: "0% 50%"
      }
    }
  }
}));