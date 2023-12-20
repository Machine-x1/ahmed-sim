/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable tailwindcss/no-custom-classname */
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import React from 'react';

import AdminLayout from '@/component/modules/AdminAside';
import AdminNav from '@/component/modules/AdminNav';
import Container from '@/component/modules/Container';

export default function index({ emails }: any) {
  return (
    <div className="h-full w-full">
      <AdminNav />
      <div className="w-1/3">
        <AdminLayout />
      </div>
      <div className=" mx-auto mr-52  w-full pt-10 xl:mx-auto   xl:w-2/3">
        <main>
          <Container className="flex  w-full flex-col py-10 ">
            <h1 className="mb-4 text-3xl font-bold">Emails</h1>
            <Table removeWrapper aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>Message</TableColumn>
              </TableHeader>
              <TableBody>
                {emails?.map((user: any) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Container>
        </main>
      </div>
    </div>
  );
}
// export async function getServerSideProps() {
//   // Fetch data from the API
//   const apiUrl = 'http://localhost:8000/contact';
//   const response = await fetch(apiUrl, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     return {
//       notFound: true,
//     };
//   }

//   const data = await response.json();

//   return {
//     props: {
//       emails: data,
//     },
//   };
// }
