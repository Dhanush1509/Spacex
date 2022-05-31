import '../styles/globals.css'
import MissionState from "../context/mission/missionState";
import { Provider } from "next-auth/client";
function MyApp({ Component, pageProps }) {
  return (
    
     
        <MissionState>
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        </MissionState>
   
 
  );
}

export default MyApp
