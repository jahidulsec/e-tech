import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import style from './specification-tab.module.css';

function SpecificationTab() {
  return (
    <>
      <Table className={style.table}>
        <TableHeader>
          <TableRow>
            <TableHead className="heading-row" colSpan={3}>
              Processor
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="name">Processor Brand</TableCell>
            <TableCell className="value">Apple</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="name">Processor Model</TableCell>
            <TableCell className="value">M2 chip</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="name">Processor Frequency</TableCell>
            <TableCell className="value">2.42 - 3.48 GHz</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="name">Processor Core</TableCell>
            <TableCell className="value">
              8-core CPU with 4 performance cores and 4 efficiency cores
              <br />
              16-core Neural Engine
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="name">Processor Thread</TableCell>
            <TableCell className="value">8</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="name">CPU Cache</TableCell>
            <TableCell className="value">20 MB</TableCell>
          </TableRow>
        </TableBody>

        <TableHeader>
          <TableRow>
            <TableHead className="heading-row" colSpan={3}>
              Display
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="name">Display Size</TableCell>
            <TableCell className="value">13.6-inch</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="name">Display Type</TableCell>
            <TableCell className="value">Liquid Retina display</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="name">Display Resolution</TableCell>
            <TableCell className="value">2560x1664</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="name">Touch Screen</TableCell>
            <TableCell className="value">No</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="name">Display Features</TableCell>
            <TableCell className="value">
              LED-backlit display with IPS technology
              <br />
              224 pixels per inch with
              <br />
              support for 1 billion colors
              <br />
              500 nits brightness
              <br />
              Wide color (P3)
              <br />
              TableRowue Tone technology
            </TableCell>
          </TableRow>{" "}
        </TableBody>
      </Table>
    </>
  );
}

export default SpecificationTab;
