import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import "./Home.css"
import back1 from "../public/Images/1.jpg";

import Image from "next/image";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { BsFillHouseFill, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GiMechanicGarage } from "react-icons/gr";
const HomePage = () => {
  return (
    <Box className="text-center flex flex-col items-center justify-center gap-8">
      <Grid container spacing={2} mb={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Button
            className="hover:scale-110 mt-4 mb-2 animate-bounce"
            variant="outlined"
            endIcon={<BsFillTelephoneOutboundFill />}
          >
            <a href="tel:09126988310">
              {" "}
              <h1 className=" p-2 text-2xl ">
                09126988310 شماره تماس امداد‌خودرو{" "}
              </h1>
            </a>
          </Button>
          <h1 className="text-xl text-rose-600 bg-teal-200 mb-2 shadow-inner ">
            با ما تماس بگیرید کمتر از 20 دقیقه کنار شما هستیم
          </h1>
          <div></div>
          <Image
            loading="lazy"
            alt="This photo is a tow truck"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/Images/3.jpg"
          />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <h1 className="text-indigo-600">خدمات امداد‌خورو غرب‌ ‌‌‌تهران</h1>
          <div className="bg-zink-200 container mx-auto text-justify p-4 m-4 rounded-lg border-4 border-zink-200  hover:border-emerald-200 transition-all duration-500 hover:bg-cyan-200 ">
            <lu>
              خدمات یدک کش و مکانیک مطمئن و کارآمد را در غرب تهران تجربه کنید
              آیا به خدمات یدک کش و مکانیک مطمئن در غرب تهران نیاز دارید؟با‌ما
              همراه باشید! در خدمات یدک کش و مکانیک غرب، ما شریک مورد اعتماد شما
              برای تمام نیازهای خودروی شما هستیم. وقتی ما را انتخاب می کنید، می
              توانید انتظار آن را داشته باشید:
              <h1 className="text-rose-600 ">خدمات بکسل</h1>
              <li>
                کمک اضطراری: ما می دانیم که خرابی وسیله نقلیه ممکن است در هر
                زمانی اتفاق بیفتد، به همین دلیل است که خدمات بکسل اضطراری
                24ساعته را ارائه می دهیم. چه در کنار جاده گیر افتاده باشید یا
                بعد از تصادف به یدک کش نیاز داشته باشید، ما اینجا هستیم تا به
                شما کمک کنیم.
              </li>
              <li>
                بکسل انواع وسایل نقلیه: کامیون های یدک کش مجهز ما می توانند طیف
                وسیعی از وسایل نقلیه، از خودروها و موتورسیکلت ها را حمل کنند.
                بدون توجه به اندازه یا نوع وسیله نقلیه شما، ما شما را تحت پوشش
                قرار می دهیم.
              </li>
              <li>
                یدک کشی ایمن و بدون آسیب: اپراتورهای یدک کش مجرب ما در هنگام
                جابجایی وسیله نقلیه شما نهایت دقت را به خرج می دهند. ما اطمینان
                می دهیم که وسیله نقلیه شما به طور ایمن بسته شده و بدون هیچ آسیبی
                در طول فرآیند بکسل حمل می شود.
              </li>
              <li>
                پاسخ سریع: وقتی برای کمک با ما تماس می گیرید، پاسخ سریع را در
                اولویت قرار می دهیم. ما در اسرع وقت به محل شما می‌رسیم، زمان
                انتظار شما را به حداقل می‌رسانیم و شما را به مسیر خود
                بازمی‌گردانیم.
              </li>
              <h1 className="text-rose-600 ">خدمات مکانیکی</h1>
              <li>
                تعمیرات تخصصی: فراتر از بکسل، ما خدمات مکانیکی درجه یک را ارائه
                می دهیم. تیم مکانیک ماهر ما می تواند طیف گسترده ای از مشکلات
                خودرو، از مشکلات موتور و تعمیرات گیربکس گرفته تا تعویض ترمز و
                موارد دیگر را تشخیص داده و تعمیر کند.
              </li>
              <li>
                قطعات با کیفیت: ما از قطعات و اجزای با کیفیت بالا در تمام
                تعمیرات و تعویض های خود استفاده می کنیم تا اطمینان حاصل کنیم که
                وسیله نقلیه شما در بهترین حالت خود کار می کند.
              </li>
              <li>
                شفافیت: ما به ارتباطات شفاف اعتقاد داریم. قبل از انجام هر کاری
                روی وسیله نقلیه شما، توضیحات مفصلی در مورد تعمیرات لازم و هزینه
                های مربوط به آن ارائه می دهیم. بدون تعجب، فقط خدمات ساده.
              </li>
              <li>
                تعمیر و نگهداری روتین: برای رفع نیازهای وسیله نقلیه خود منتظر
                خرابی نباشید. ما خدمات تعمیر و نگهداری معمولی، از جمله تعویض
                روغن، چرخش لاستیک، و بازرسی را ارائه می دهیم تا وسیله نقلیه شما
                را در شرایط اوج نگه دارید.
              </li>
              <li>
                نرخ های مقرون به صرفه: ما نرخ های رقابتی را برای خدمات بکسل و
                مکانیک خود ارائه می دهیم. خدمات با کیفیت نیازی به قیمت گزاف
                ندارد.
              </li>
              <li>
                رویکرد مشتری مداری: در خدمات یدک کش و مکانیک غرب تهران، تعهد ما
                به رضایت مشتری تزلزل ناپذیر است. ما امنیت، راحتی و آرامش شما را
                در اولویت قرار می دهیم. چه در هنگام تعمیر و نگهداری اضطراری
                خودرو خود نیاز به یدک کشی داشته باشید، می توانید برای ارائه
                خدمات با کیفیت بالا به ما اعتماد کنید.
              </li>
            </lu>
          </div>
          <a href="tel:09126988310">
            {" "}
            <Button
              endIcon={<BsFillTelephoneOutboundFill />}
              className="text-2xl bg-blue-600 p-5 shadow-blue-400  hover:scale-110"
              variant="contained"
            >
              درخواست فوری امداد خودرو غرب
            </Button>
          </a>
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Image
            loading="lazy"
            alt="This is a photo of a mechanic "
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/Images/1.jpg"
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <div>
            <h1 className="text-indigo-600">
              مزایای استفاده از امداد‌خودروی غرب تهران
            </h1>

            <ul className="  bg-zink-200 container mx-auto p-4 m-4 rounded-lg border-4 border-blue-200  hover:border-green-400 transition-all duration-500 hover:bg-blue-300 ">
              <li>
                <span className="text-rose-600 list-outside">
                  {" "}
                  • خدمات اضطراری
                </span>
              </li>
              <li>
                <span className="text-fuchsia-500 list-outside ">
                  {" "}
                  • تجربه و تخصص
                </span>
              </li>
              <li>
                <span className="text-violet-700"> • تعمیرات با کیفیت </span>
              </li>
              <li>
                <span className="text-sky-950">• خدمات سریع </span>
              </li>
              <li>
                <span className="text-blue-700">• قیمت گذاری شفاف </span>
              </li>
              <li>
                <span className="text-blue-700">• خدمات شخصی شده </span>
              </li>
              <li>
                <span className="text-rose-600">• تعمیر و نگهداری منظم </span>
              </li>
              <li>
                <span className="text-blue-700">
                  • ابزارهای تشخیصی پیشرفته{" "}
                </span>
              </li>
              <li>
                <span className="text-sky-950">• موقعیت مکانی مناسب </span>
              </li>
              <li>
                <span className="text-rose-600">• رضایت مشتری</span>
              </li>
              <li>
                <span className="text-sky-950">• سوخت‌رسانی سریع</span>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>

      <>
        <meta charset="UTF-8"></meta>
        <meta property="og:locale" content="fa_IR"></meta>
        <title> امداد خودرو غرب تهران | 09126988310</title>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>

        <meta
          name="description"
          content="امداد خودرو غرب تهران ،سریعترین امداد خودرو غرب تهران"
        ></meta>
        <meta
          name="keywords"
          content="امداد خودرو,امداد خودرو غرب ,ام وی ام,امداد خودرو لیفان,هیوندا,تعمیرات هیوندا,تعمیرات لیفان,تعمیرات جک ,امداد خودرو جک,امداد خودرو غرب  تهران"
        ></meta>
        <meta name="og:title" content="امداد خودرو غرب تهران"></meta>
        <meta property="og:title" content="امداد خودرو غرب تهران"></meta>
        <meta
          property="og:description"
          content="امداد خودرو غرب ارائه تعمیرات تمامی محصولات به ویژه محصولات مدیران خودرو"
        ></meta>
        <meta
          name="og:description"
          content="امداد خودرو غرب تهران بهترین امداد خودرو غرب ارائه خدمات در کمترین زمان ممکن"
        ></meta>
        <link
          rel="shortcut icon"
          href="/favicon3.png"
          type="image/x-icon"
        ></link>
      </>
    </Box>
  );
};
export default HomePage;
