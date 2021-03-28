// import injectGlobal from 'styled-components';

// injectGlobal`

//     @import url('https://fonts.googleapis.com/css2?family=Inter:100,600');

//     body {
//         margin: 0;
//         font-family: 'Inter';
//         -webkit-font-smoothing: antialiased;
//         -moz-osx-font-smoothing: grayscale;
//     }

//     code {
//         font-family: 'Inter';
//     }
// `

import { createGlobalStyle } from 'styled-components';

import interv3latin100 from './inter-v3-latin-100.woff';
import interv3latin1002 from './inter-v3-latin-100.woff';
import interv3latin200 from './inter-v3-latin-200.woff';
import interv3latin2002 from './inter-v3-latin-200.woff2';
import interv3latinregular from './inter-v3-latin-regular.woff';
import interv3latinregular2 from './inter-v3-latin-regular.woff2';
import interv3latin600 from './inter-v3-latin-600.woff';
import interv3latin6002 from './inter-v3-latin-600.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: local('Inter'), local('Inter'),
        url(${interv3latin1002}) format('woff2'),
        url(${interv3latin100}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: local('Inter'), local('Inter'),
        url(${interv3latin2002}) format('woff2'),
        url(${interv3latin200}) format('woff');
        font-weight: 200;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: local('Inter'), local('Inter'),
        url(${interv3latinregular2}) format('woff2'),
        url(${interv3latinregular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: local('Inter'), local('Inter'),
        url(${interv3latin6002}) format('woff2'),
        url(${interv3latin600}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
`;

  