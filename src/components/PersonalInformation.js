import React from 'react';

const PersonalInformation = () => {
    return (
        <div className="overflow-x-auto p-3">
            <table className="table w-full">
                <tbody>
                    {/* row 1 */}
                    <tr className="active">
                        <th>Father’s name</th>
                        <td className='font-semibold'>Siddiqul</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="active">
                        <th>Mother’s name</th>
                        <td className='font-semibold'>Gulsahanara Begum</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="active">
                        <th>Date of Birth</th>
                        <td className='font-semibold'>August 2.1997</td>
                    </tr>

                    <tr className="active">
                        <th>Nationality</th>
                        <td className='font-semibold'>Bangladeshi by Birth</td>
                    </tr>

                    <tr className="active">
                        <th>Blood Group</th>
                        <td className='font-semibold'>B (+ve)</td>
                    </tr>


                    <tr className="active">
                        <th>Gender</th>
                        <td className='font-semibold'>Male</td>
                    </tr>

                    <tr className="active">
                        <th>Marital Status</th>
                        <td className='font-semibold'>Married</td>
                    </tr>

                    <tr className="active">
                        <th>Religion</th>
                        <td className='font-semibold'>Islam </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default PersonalInformation;