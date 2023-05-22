import Image from "next/image";
import { BLUR_URL } from "@variables";
import Paragraph from "@components/Paragraph";
import Heading from "@components/Heading";
export const metadata = {
  title: "Thông tin",
  openGraph: {
    title: "Thông tin - Tiến Đỗ",
    description: "Thông tin cá nhân của Tiến Đỗ",
    url: "https://www.tien-dnm.com/about",
    siteName: "Thông tin - Tiến Đỗ",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 627,
      },
    ],
    locale: "vi-VN",
    type: "website",
  },
};
const About = () => {
  return (
    <>
      <div className="w-full">
        {/* <Heading
          level={1}
          className="mb-5 text-center font-extrabold uppercase">
          Thông tin
        </Heading> */}
        <main className="flex flex-col gap-8">
          <section className="flex w-full flex-col items-stretch rounded-lg backdrop-blur-sm md:flex-row">
            <div className="relative h-52 w-full  object-cover md:h-auto  ">
              <Image
                data-sal="slide-right"
                data-sal-delay="300"
                data-sal-easing="ease-out-back"
                fill
                src={"/avatar-1.jpeg"}
                placeholder="blur"
                blurDataURL={BLUR_URL}
                alt="Hình ảnh cá nhân"
                className="overflow-hidden rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
                sizes="(max-width: 786px) 256px, 700px"
              />
            </div>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <Heading level={2}>Về mình</Heading>
              <Paragraph>
                Xin chào, mình là Minh Tiến, một lập trình viên web và ứng dụng Power
                Platform đầy nhiệt huyết. Với niềm đam mê không ngừng khám phá những công
                nghệ và thách thức mới, mình không chỉ mong muốn mang lại những giải pháp
                hiệu quả, mà còn đặc biệt quan tâm đến việc đáp ứng tối đa nhu cầu của các
                bạn.
              </Paragraph>
              <Paragraph>
                Mình luôn sẵn lòng hợp tác và kết nối trong mọi dự án thú vị. Từ ý tưởng
                ban đầu của các bạn, mình cam kết sẽ biến tầm nhìn đó thành hiện thực với
                sự tận tâm và chuyên môn của mình. Hãy đồng hành cùng mình để chúng ta có
                thể xây dựng những điều phi thường.
              </Paragraph>
            </div>
          </section>
          <section className="flex w-full flex-col items-stretch rounded-lg   backdrop-blur-sm    md:flex-row">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <Heading level={2}>Về trang web này</Heading>
              <Paragraph>
                Được tạo ra trong thời gian rảnh rỗi của bản thân, nhằm mục đích giới
                thiệu về những dự án tuyệt vời mà mình đã tham gia và hoàn thành. Mình rất
                háo hức được chia sẻ những thành tựu đáng tự hào của mình với các bạn.
              </Paragraph>
              <Paragraph>
                Tuy nhiên, không đơn thuần là một bộ sưu tập các dự án, mình còn muốn dùng
                chia sẻ kiến thức và kinh nghiệm lập trình cho mọi người trên trang web
                này. Mình sẽ đăng những bài viết cung cấp những thông tin hữu ích và chia
                sẻ kinh nghiệm lập trình đa dạng.
              </Paragraph>
              <Paragraph>
                Đây là cơ hội tuyệt vời để chia sẻ kiến thức của mình và cùng mọi người
                tạo ra một cộng đồng học hỏi và trao đổi thông tin
              </Paragraph>
            </div>
            <div className="relative h-52 w-full  object-cover md:h-auto ">
              <Image
                data-sal="slide-right"
                data-sal-delay="300"
                data-sal-easing="ease-out-back"
                fill
                src={"/about-banner.jpg"}
                placeholder="blur"
                blurDataURL={BLUR_URL}
                alt="Hình ảnh cá nhân"
                className="overflow-hidden rounded-b-lg object-cover  md:rounded-none md:rounded-r-lg"
                sizes="(max-width: 786px) 256px, 700px"
              />
            </div>
          </section>
          {/* <section className="flex flex-col gap-3">
            <Heading level={2}>Về mình</Heading>
            <article className="grid gap-5 sm:grid-cols-6">
              <div
                data-sal="slide-left"
                data-sal-delay="300"
                className="sm:col-span-4">
                <Paragraph>Xin chào.</Paragraph>
                <Paragraph>
                  Mình là Minh Tiến, một lập trình viên web và ứng dụng Power Platform đầy
                  nhiệt huyết. Với niềm đam mê không ngừng khám phá những công nghệ và
                  thách thức mới, mình không chỉ mong muốn mang lại những giải pháp hiệu
                  quả, mà còn đặc biệt quan tâm đến việc đáp ứng tối đa nhu cầu của các
                  bạn.
                </Paragraph>
                <Paragraph>
                  Mình luôn sẵn lòng hợp tác và kết nối trong mọi dự án thú vị. Từ ý tưởng
                  ban đầu của các bạn, mình cam kết sẽ biến tầm nhìn đó thành hiện thực
                  với sự tận tâm và chuyên môn của mình. Hãy đồng hành cùng mình để chúng
                  ta có thể xây dựng những điều phi thường.
                </Paragraph>
              </div>
              <figure className="relative h-52 self-center sm:col-span-2  sm:h-48">
                <Image
                  data-sal="slide-right"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-back"
                  fill
                  src={"/avatar-1.jpeg"}
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  alt="Hình ảnh cá nhân"
                  className="aspect-square overflow-hidden rounded-lg object-cover"
                  sizes="(max-width: 786px) 256px, 700px"
                />
              </figure>
            </article>
          </section>
          <section className="flex flex-col gap-3">
            <Heading level={2}>Về trang web này</Heading>
            <article className="grid gap-5 sm:grid-cols-6">
              <div
                data-sal="slide-left"
                data-sal-delay="300"
                className="sm:col-span-4">
                <Paragraph>
                  Được tạo ra trong thời gian rảnh rỗi của bản thân, nhằm mục đích giới
                  thiệu về những dự án tuyệt vời mà mình đã tham gia và hoàn thành. Mình
                  rất háo hức được chia sẻ những thành tựu đáng tự hào của mình với các
                  bạn.
                </Paragraph>
                <Paragraph>
                  Tuy nhiên, không đơn thuần là một bộ sưu tập các dự án, mình còn muốn
                  dùng chia sẻ kiến thức và kinh nghiệm lập trình cho mọi người trên trang
                  web này. Mình sẽ đăng những bài viết cung cấp những thông tin hữu ích và
                  chia sẻ kinh nghiệm lập trình đa dạng.
                </Paragraph>
                <Paragraph>
                  Đây là cơ hội tuyệt vời để chia sẻ kiến thức của mình và cùng mọi người
                  tạo ra một cộng đồng học hỏi và trao đổi thông tin
                </Paragraph>
              </div>
              <figure className="relative h-52 self-center sm:col-span-2 sm:h-48">
                <Image
                  data-sal="slide-right"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-back"
                  fill
                  src={"/about-banner.jpg"}
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  alt="Hình ảnh cá nhân"
                  className="aspect-square overflow-hidden rounded-lg object-cover"
                  sizes="(max-width: 786px) 256px, 700px"
                />
              </figure>
            </article>
          </section> */}
        </main>
      </div>
    </>
  );
};

export default About;
