import TabTableContent from "../../components/TabTableContent";

// Function to generate 50 objects with modified data based on the reference object
function generateObjects(referenceObj, numberOfObjects) {
    const arrayOfObjects = [referenceObj]; // Initialize the array with the reference object

    for (let i = 1; i < numberOfObjects; i++) {
        const newObj = { ...referenceObj }; // Create a new object by copying the reference object
        // Modify some properties of the new object
        newObj.vendor_name = `Vendor ${i + 1}`;
        newObj.qr_status = i % 2 === 0 ? "Matched" : "Missing";
        newObj.ocr_status = i % 3 === 0 ? "Missing" : "Matched";
        newObj.twoA = `${Math.floor(Math.random() * 5000) + 1000}/2021-22`;
        // Add the new object to the array
        arrayOfObjects.push(newObj);
    }

    return arrayOfObjects;
}


export const overviewTableColumns = [
    { headerName: "Vendor Name", field: 'vendor_name', resizable: true, filter: 'agTextColumnFilter' },
    { headerName: "OCR Match Status", field: 'ocr_status', },
    { headerName: "PR Match Status", field: 'pr_status' },
    { headerName: "2A Invoice Number", field: 'twoA' },
    { headerName: "E-invoice", field: 'einvoice' },
]

export const vendorTableColumns = [
    { headerName: "Vendor Name", field: 'vendor_name', resizable: true, filter: 'agTextColumnFilter' },
    { headerName: "Vendor Score", field: 'ocr_status', },
    { headerName: "Vendor Rating", field: 'pr_status' },
    { headerName: "Vendor Category", field: 'twoA' },
    { headerName: "Vendor % Liabilities", field: 'einvoice' },
]
const overviewData = generateObjects({
    vendor_name: "NAVDEEP HOTELS PRIVATE LIMITED",
    qr_status: "Missing",
    ocr_status: "Matched",
    pr_status: "Matched",
    twoA: "2440/2021-22",
    einvoice: "Eligible"
}, 50)

export const TABS = {
    overview: {
        name: "Overview",
        component: <TabTableContent columns={overviewTableColumns} rows={overviewData} />
    },
    vendor: {
        name: "Vendor",
        component: <TabTableContent columns={vendorTableColumns} rows={overviewData} />
    },
    qr: {
        name: "QR",
        component: <TabTableContent />
    },
    ocr: {
        name: 'OCR',
        component: <TabTableContent />
    },
    pr: {
        name: 'PR',
        component: <TabTableContent />
    },
    twoA: {
        name: "2A",
        component: <TabTableContent />
    },
    eligibility: {
        name: "Eligibility",
        component: <TabTableContent />
    }
}



