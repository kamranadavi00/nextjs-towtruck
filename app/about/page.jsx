"use client"

import Link from 'next/link';
import { Box, Grid } from "@mui/material";
import Image from 'next/image';
const Header=()=>{
    return(
    <Box  >
      <h1 className=" pt-1 text-2xl text-center flex flex-col items-center justify-center gap-8"> در‌باره‌ما</h1>
      
            <Grid className='flex flex-col pt-8 items-center justify-center'  item xl={6} lg={6} md={6} sm={6} xs={6}>
            <Image className='animate-pulse ' loading="lazy"  alt="This photo is a tow truck"  width={130} height={130} sizes="100vw" 
           src="/Images/5.png"
           
           />
            
      <p className=" p-5 items-start justify-start">       
      
     



      </p>
      <div>
      <h3 className=" text-rose-600 text-xl p-3 Pb-3 items-start justify-start">یک شریک قابل اعتماد در زمان نیاز شما</h3>
      <p className=" p-5 items-start justify-start"> 
      روز ما با طلوع خورشید بر فراز کلان شهر شلوغ غرب تهران آغاز می شود. ما درک می کنیم که مشکلات وسیله نقلیه ممکن است در هر لحظه رخ دهد، بنابراین کامیون یدک کش قابل اعتماد ما همیشه آماده عمل است. چه خرابی، تصادف یا صرفاً وسیله نقلیه ای که نیاز به حمل و نقل دارد، ما اینجا هستیم تا راه حلی قابل اعتماد و کارآمد ارائه دهیم.
      </p>
      <h3 className="text-green-500 text-xl  p-3 items-start justify-start">تخصص در تعمیر</h3>
      <p className=" pb-20 p-5 items-start justify-start">
      هر وسیله نقلیه داستان منحصر به فرد خود را دارد، و ما به کشف و حل هر یک تخصص داریم. ما به عنوان یک مکانیک کارکشته، در سرویس انواع خودروها ایرانخودرو،کرمان‌موتور،سایپا تخصص داریم، اما علاقه خاصی به خودروهای مدیران خودرو داریم. پیچیدگی های این ماشین ها زمین بازی ما هستند و کارگاه مجهز ما جایی است که چالش ها را به پیروزی تبدیل می کنیم.
      </p>
      <h3 className="text-fuchsia-800  text-xl  p-3 items-start justify-start">مدیران خودرو: تخصص ما</h3>
      <p className=" pb-20 p-5 items-start justify-start">
      در حالی که پذیرای همه خودروها هستیم، خودروهای مدیران خودرو جایگاه ویژه ای در قلب ما دارند. برتری مهندسی و طراحی خلاقانه ای که در این خودروها یافت می شود هرگز ما را شگفت زده نمی کند. بازگرداندن خودروهای مدیران خودرو به اوج عملکرد برای ما هم یک اشتیاق و هم یک رسالت است.
      </p>
      </div>
         
      </Grid>

      <>  
                <title>  امداد خودرو غرب تهران | 09126988310</title>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content="امداد خودرو غرب تهران ،سریعترین امداد خودرو غرب تهران"></meta>
                <meta name="keywords" content="امداد خودرو,امداد خودرو غرب ,ام وی ام,امداد خودرو لیفان,هیوندا,تعمیرات هیوندا,تعمیرات لیفان,تعمیرات جک ,امداد خودرو جک,امداد خودرو غرب  تهران"></meta>
                <meta name="og:title" content="امداد خودرو غرب تهران" ></meta>
                <meta property="og:title" content="امداد خودرو غرب تهران"></meta>
                  <meta property="og:description" content="امداد خودرو غرب ارائه تعمیرات تمامی محصولات به ویژه محصولات مدیران خودرو"></meta>
                <meta name="og:description" content="امداد خودرو غرب تهران بهترین امداد خودرو غرب ارائه خدمات در کمترین زمان ممکن"></meta>
                <link rel="shortcut icon" href="/favicon3.png" type="image/x-icon"></link>
            </>
   </Box>
   
    ) 
}
export default Header;





