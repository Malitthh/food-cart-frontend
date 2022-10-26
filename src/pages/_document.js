import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
            <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
            <link href="./assets/css/nucleo-icons.css" rel="stylesheet" />
            <link href="./assets/css/nucleo-svg.css" rel="stylesheet" />
            <script src="https://unpkg.com/@popperjs/core@2"></script>
          
            <link href="/assets/css/soft-ui-dashboard-tailwind.css?v=1.0.4" rel="stylesheet" /> 

            {/* -- Css Styles --  */}
            <link href="https://fonts.googleapis.com/css?family=Cairo:400,600,700&amp;display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins:600&amp;display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400i,700i" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Ubuntu&amp;display=swap" rel="stylesheet"/>
            <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/assets/css/animate.min.css"/>
            <link rel="stylesheet" href="/assets/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="/assets/css/nice-select.css"/>
            <link rel="stylesheet" href="/assets/css/slick.min.css"/>
            <link rel="stylesheet" href="/assets/css/style.css"/>
            <link rel="stylesheet" href="/assets/css/main-color03-green.css"/>
{/* 
            <script src="assets/js/jquery-3.4.1.min.js"></script> */}
          <script src="/assets/js/bootstrap.min.js"></script>
          {/* <script src="assets/js/jquery.countdown.min.js"></script>
          <script src="assets/js/jquery.nice-select.min.js"></script>
          <script src="assets/js/jquery.nicescroll.min.js"></script> */}
          {/* <script src="assets/js/slick.min.js"></script>
          <script src="assets/js/biolife.framework.js"></script>
          <script src="assets/js/functions.js"></script> */}

        </Head>
      <body className='m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500'>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}