 
 
import { Accordion } from "flowbite-react";

export function   Accordion3() {
  return (
    <Accordion
      className=" transition-all bg-purple-100/50 duration-500 delay-100  text-xl border-2 border-purple-500 "
      alwaysOpen={false}
      autoFocus={false}
      
    >
      <Accordion.Panel>
        <Accordion.Title>
          How do I start a project with your agency?
        </Accordion.Title>
        <Accordion.Content className="bg-white ">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            To start a project, you can contact us through our website's contact
            form, email, or phone. We will schedule an initial consultation to
            discuss your project requirements and goals.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What is your process for developing a website or web application?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Our process includes initial consultation, project planning, design
            and development, testing, deployment, and ongoing support and
            maintenance
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Do you provide ongoing support and maintenance for websites?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, we offer ongoing support and maintenance packages to ensure
            your website remains updated, secure, and functioning optimally.
          </p>
           
                   </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
