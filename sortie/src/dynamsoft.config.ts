import { CoreModule } from "dynamsoft-core";
import { LicenseManager } from "dynamsoft-license";
import "dynamsoft-barcode-reader";

// Configures the paths where the .wasm files and other necessary resources for modules are located.
CoreModule.engineResourcePaths.rootDirectory = "https://cdn.jsdelivr.net/npm/";

/** LICENSE ALERT - README
 * To use the library, you need to first specify a license key using the API "initLicense()" as shown below.
 */

LicenseManager.initLicense("t0088pwAAAJZouqPom+mD2ce913boT0RYYY3mHxqa1WVCnF6HzUHdsfKtiCTVzPmBU3+wWnySPoJWBNEYZkCPKgXrMNBUgE++6iI/QTxbx1fHH1XXGr0XUM8iRw==;t0088pwAAAGZky2/kz798jpjeG/KsdHatW0o4DwZ8O3GyWYMOGgfmtTaVLMwRAnELqJXjlMQvTxFISnyzM18ebwzF6rHPuupV3VitOfZO7I8/VEOP/L0BWH8iTA==", {
  executeNow: true,
});

/**
 * You can visit https://www.dynamsoft.com/customer/license/trialLicense?utm_source=samples&product=dbr&package=js to get your own trial license good for 30 days.
 * Note that if you downloaded this sample from Dynamsoft while logged in, the above license key may already be your own 30-day trial license.
 * For more information, see https://www.dynamsoft.com/barcode-reader/docs/web/programming/javascript/user-guide/index.html?ver=10.4.2002&cVer=true#specify-the-license&utm_source=samples or contact support@dynamsoft.com.
 * LICENSE ALERT - THE END
 */

// Optional. Preload "BarcodeReader" module for reading barcodes. It will save time on the initial decoding by skipping the module loading.
CoreModule.loadWasm(["DBR"]);
