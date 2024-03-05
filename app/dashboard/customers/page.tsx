import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};
interface ICustomersProps {}

export default function Customers(props: ICustomersProps) {
  return (
    <div>
      <p>Customers Page</p>
    </div>
  );
}
