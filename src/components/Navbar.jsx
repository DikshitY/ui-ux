import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-main'>
      <div className='nav-logo-container'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.7513 0.5H20.2942V12.2742C20.1964 12.2909 20.0991 12.309 20.0023 12.3284L15.8156 1.32328L12.5844 2.55253L16.7781 13.5761C16.7021 13.6216 16.6267 13.6682 16.552 13.7156L8.73086 4.8842L6.14275 7.17624L13.9882 16.0352L13.9535 16.0796L3.58895 10.3678L1.92035 13.3956L12.3243 19.1291C12.2997 19.2034 12.2759 19.278 12.253 19.353L0.490633 17.6666L0 21.0888L10.629 22.6127L0.0322297 24.3464L0.590446 27.7582L12.4167 25.8233L12.4236 25.8421L1.94094 31.6497L3.61631 34.6737L14.1425 28.8421C14.1807 28.8883 14.2192 28.9342 14.2582 28.9797L6.47149 38.1573L9.10763 40.3939L16.8709 31.2439L12.6293 42.469L15.8633 43.691L20.1361 32.3833C20.1887 32.3931 20.2413 32.4025 20.2942 32.4115V44.5H23.7513V32.4115C23.8115 32.4013 23.8715 32.3905 23.9313 32.3792L28.2294 43.6771L31.4606 42.4479L27.1693 31.1677C27.2176 31.1395 27.2657 31.1108 27.3136 31.0818L35.3142 40.1159L37.9024 37.8239L29.9469 28.8408L40.4561 34.6323L42.1247 31.6045L31.6296 25.8208C31.6522 25.7585 31.6742 25.6958 31.6956 25.633L43.5546 27.3332L44.0453 23.911L33.4172 22.3873L44.0131 20.6537L43.4549 17.2419L31.7314 19.16L31.7139 19.1072L42.1044 13.3507L40.429 10.3267L30.0778 16.0614C30.0259 15.995 29.9733 15.9293 29.9199 15.8642L37.574 6.84293L34.9378 4.60629L27.3071 13.6L27.2473 13.5641L31.4161 2.53148L28.1822 1.30948L24.0202 12.3238C23.931 12.3061 23.8413 12.2896 23.7513 12.2742V0.5Z"
            fill="#6A45FF"
          />
        </svg>
        <span className='nav-logo-title'><h1>LOGO</h1></span>
      </div>
      <div className='nav-item-container'>
        <p>Home</p>
        <p>Page 1</p>
        <p>Page 2</p>
      </div>
    </div>
  );
}

export default Navbar;