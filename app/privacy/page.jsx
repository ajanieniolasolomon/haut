/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */

export default function PrivacyPage() {

    return (
      <div className="w-[100%]  h-[100%]  md:mt-[95px]">
        <div className=" w-[100%]">
          <h1 className="text-[54px] font-lexend font-[700] text-center py-[5%]">
          Privacy Policy for DemiCare
          </h1>
        </div>
        <div className="w-[100%] md:flex  h-[100%] p-[5%] gap-6">
          <div className="md:w-[70%]  flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] font-[500]">1. Information We Collect</h3>
              <div>
             Demicare collects facial data when you request skin analysis for our partner brand, such as skin analysis . This  include facial images for providing personalized product  recommendations specific to the brand.
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] font-[500]">2. How We Use Your Information</h3>
              <div>
              We use facial data to:
              <ul class="list-disc  pl-5">
                <li>Analyze skin conditions and provide tailored skincare insights.</li>
                <li>Improve the accuracy of our AI-driven skin analysis.</li>
               
              </ul>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] font-[500]">
              3. Sharing and Disclosure of Information
              </h3>
              <div>
              We do not sell or share your facial data with third parties for advertising purposes. Facial data may be processed by trusted third-party services
              solely for the purpose of improving our services.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[24px] font-[500]">
              4. Data Retention and Deletion
              </h3>
              <div>
              We use facial data to:
              <ul class="list-disc pl-5">
                <li>Facial data is stored securely and retained only as long as necessary for analysis and research purpose.</li>
                <li>You can request deletion of your face data at any time by contacting info@demicare.skin</li>
                <li>After deletion, we ensure that no residual data remains in our systems.</li>
              </ul>
              </div>
           
        


            
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] font-[500]">
              7. Contact Us
              </h3>
              <div>
              If you have any questions about this policy, you can reach us at info@demicare.skin.
              </div>
         
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] font-[500]">
              5. Security Measures
              </h3>
              <div>
              We take strict security measures to protect your face data, including encryption and secure storage. Your data is processed locally when possible, and if stored, it is encrypted to prevent unauthorized access.
              </div>
           
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] font-[500]">
              6. Your Rights and Choices
              </h3>
              <div>
              <ul class="list-disc pl-5">
                <li>
                You can opt out of face data collections by contacting info@demicare.skin.

                </li>

                <li>
                You have the right to access, update, or delete your data by contacting info@demicare.skin.
                </li>
               </ul>
              </div>
            </div>

        
          </div>
          <div className="md:w-[30%]  md:mt-0 mt-6">
            <div className="p-[5%] bg-[#f9f9f9] h-[270px] flex flex-col gap-4">
              <h4 className="text-secondary text-[38px]">Questions</h4>
              <p className="text-[16px] text-black">
                If you have questions or comments, give us a call or email us:
              </p>
              <div>
                <p>Monday - Friday, 9:00 AM - 5:30 PM</p>
                <p>
                  email:{" "}
                  <a
                    href="mailto:info@demicare.skin"
                    className="text-secondary"
                  >
                    info@demicare.skin
                  </a>{" "}
                </p>
                <p>phone: (+234) 9132496146</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
