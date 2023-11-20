"use client";

import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">E-Thrift Store</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Системийн тухай</h2>
          <p className="text-gray-700">
            EThrift систем нь хэрэглэгч өөрийн хуучин эсвэл худалдаалахыг хүссэн
            хувцасаа өөр нэгэн хэрэглэгчид худалдаалах, өөрт хэрэгтэй хувцасаа
            авах боломжийг олгоно. Мөн хэрэглэгч заавал дэлгүүрт биечлэн
            очихгүйгээр онлайнаар худалдан авалт хийх боломжтой.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Зорилго</h2>
          <p className="text-gray-700">
            Дэлхий нийтэд хувцасны хог хаягдал маш их байгаа бөгөөд энэ нь
            байгаль орчинд сөргөөр нөлөөлж, усны хомсдолд орох том шалтгаан болж
            байгаа учраас хуучин хувцасны худалдаа(thrift)-г системээр дамжуулан
            хөгжүүлж, хувцасны хог хаягдлыг багасгах зорилготой.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Багийн гишүүд</h2>
          <p className="text-gray-700">
            МУИС-ийн MТЭС-ийн Програм хангамжийн ангийн 4-р курсын оюутан Б.
            Анхбаяр/20B1NUM1439, Ү. Тэмүүлэн/20B1NUM0449.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Бидэнтэй холбогдох</h2>
          <p className="text-gray-700">
            Хэрвээ танд ямар нэгэн санал хүсэлт байгаа бол{" "}
            <Link href="/contact" className="text-blue-500">
              энд
            </Link>{" "}
            дарна уу.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
