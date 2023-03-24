import { Keyframes } from '@ant-design/cssinjs';
import { createStyles, css } from 'antd-style';

export default createStyles(({ token }) => ({

  layout: {
    background: "linear-gradient(110.6deg, rgb(156, 116, 129) -18.3%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)",
    height: '100%',
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
  },
  container: css`
    padding: 1px;
    width: 600px;
    border-radius: 1rem;
    background-color: ${token.colorBgContainer};
    background-image: linear-gradient(135deg, #ff4593, #ffe713 32%, #17d7ff 66%, #077bff);
    position: relative;
    box-shadow: rgba(255, 69, 146, 0.2) -40px -40px 200px, rgba(255, 231, 18, 0.2) -4px 0px 200px,
      rgba(23, 216, 255, 0.2) 0px 20px 200px, rgba(8, 123, 255, 0.2) 0px 20px 200px;
  `,

  searchBox: css`
    display: flex;
    padding: 1rem;
    align-items: center;
    border-bottom: 1px solid #444;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: ${token.colorBgBase};
  `,
  placeholder: css`
    padding-left: 8px;
    flex: 1;
    color: hsla(0, 0%, 100%, 0.4);
  `,
  mask: css`
    position: absolute;
    left: -21%;
    top: auto;
    right: -21%;
    bottom: -9%;
    z-index: 22;
    display: block;
    height: 16rem;
    pointer-events: none;
    background-image: linear-gradient(0deg, #0f0f0f 20%, rgba(15, 15, 15, 0));
  `,

  menuContainer: css`
    padding: 8px 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${token.colorBgContainer};
  `,
  menuItem: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 14px;
    // color: hsla(0, 0%, 100%, 0.75);
    color: ${token.colorTextBase};
    cursor: pointer;
  `,
  menuItemHover: css`
    background-color: #363636;
  `,
}));