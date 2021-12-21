// import { parseCookies } from '@/helpers/index'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "@/config/index";

export default function AddEventPage() {
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }

    // const res = await fetch(`${API_URL}/events`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(values),
    // })

    // if (!res.ok) {
    //   if (res.status === 403 || res.status === 401) {
    //     toast.error('No token included')
    //     return
    //   }
    //   toast.error('Something Went Wrong')
    // } else {
    //   const evt = await res.json()
    //   router.push(`/events/${evt.slug}`)
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <section className=" bg-neutral-100">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Link href="/events">
          <a className="">Go Back</a>
        </Link>
        <h2 className="py-8 font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl ">
          Add Event
        </h2>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full mt-1 border border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full mt-1 border-gray-800 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-400 focus:border-indigo-500 "
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm hover:border-red-400 "
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="city"
                    className="block font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="region"
                    className="block font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block font-medium text-gray-700"
                  >
                    ZIP / Postal code
                  </label>
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>

          <div>
            <div>
              <label className="block font-medium text-gray-700" htmlFor="name">
                Event Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
                className="block mt-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
              />
            </div>
            <div>
              <label
                className="block font-medium text-gray-700"
                htmlFor="performers"
              >
                POZS
              </label>
              <input
                type="text"
                name="performers"
                id="performers"
                value={values.performers}
                onChange={handleInputChange}
                className="block mt-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
              />
            </div>
            <div>
              <label
                className="block font-medium text-gray-700"
                htmlFor="venue"
              >
                Kind
              </label>
              <input
                type="text"
                name="venue"
                id="venue"
                value={values.venue}
                onChange={handleInputChange}
                className="block mt-1 border border-gray-800 rounded shadow-sm hover:border-gray-400 "
              />
            </div>
            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                About
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full mt-1 border border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-red-800 focus:border-red-800 sm:text-sm"
                  placeholder="you@example.com"
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>
            <div>
              <label
                className="block font-medium text-gray-700"
                htmlFor="address"
              >
                Municipality
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 pr-3 mt-1 bg-white border focus:outline-none focus:ring-sky-500 focus:ring-2 sm:text-sm "
              />
              <input
                class="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={values.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <input
                type="text"
                name="time"
                id="time"
                value={values.time}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="description">Event Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={values.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <input
            className="inline-flex justify-center px-4 py-2 font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
            value="Add Event"
          />
        </form>
      </div>
    </section>
  );
}

// export async function getServerSideProps({ req }) {
//   // const { token } = parseCookies(req);

//   return {
//     props: {
//       token,
//     },
//   };
// }
