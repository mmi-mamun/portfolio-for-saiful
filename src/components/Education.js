import React from 'react';
import { Helmet } from 'react-helmet';

const Education = () => {
    return (
        <div className="mockup-window border bg-base-300 my-20 px-3">
            <Helmet>
                <title>Saiful | Education</title>
            </Helmet>


            <h1 className="text-3xl font-bold text-center">Academic Result</h1>

            <div className="overflow-x-auto my-16">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Degree</th>
                            <th>Concentration</th>
                            <th className='text-center'>Institution</th>
                            <th>Passing Year</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>SSC</th>
                            <td>Science</td>
                            <td>Pakuria high school</td>
                            <td>2012</td>
                            <td>3.44 out of 5</td>
                        </tr>

                        {/* row 2 */}
                        <tr className="hover">
                            <th>HSC</th>
                            <td>Business Studies</td>
                            <td>Dr. Sekander Ali college</td>
                            <td>2014</td>
                            <td>3.70 out of 5</td>
                        </tr>

                        {/* row 3 */}
                        <tr className="hover">
                            <th>BBA</th>
                            <td>Finance</td>
                            <td>Bangladesh University Of Business And Technology</td>
                            <td>2018</td>
                            <td>3.24 out of 4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Education;