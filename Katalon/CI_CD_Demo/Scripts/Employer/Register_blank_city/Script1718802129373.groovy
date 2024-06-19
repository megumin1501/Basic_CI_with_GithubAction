import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('http://localhost:5173/for-employers')

WebUI.click(findTestObject('Object Repository/Page_App/button_Register Employer'))

WebUI.setText(findTestObject('Object Repository/Page_App/input__form-input h-12 w-full rounded-sm bo_f18aed_1_2_3_4'), 'phamviet12092003@gmail.com')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_App/input__form-input h-12 w-full rounded-sm bo_f18aed_1_2_3_4'), 
    'B25cOLsYAxijip72rPI1mxe9C7bSdMi/DpN07raTHyc=')

WebUI.setText(findTestObject('Object Repository/Page_App/input__form-input h-12 w-full rounded-sm bo_f18aed_1_2_3_4'), 'Pham Viet')

WebUI.click(findTestObject('Object Repository/Page_App/button__male'))

WebUI.setText(findTestObject('Object Repository/Page_App/input__form-input h-12 w-full rounded-sm bo_f18aed_1_2_3_4'), '0123456789')

WebUI.setText(findTestObject('Object Repository/Page_App/input__form-input h-12 w-full rounded-sm bo_f18aed_1_2_3_4'), 'Hcmus')

WebUI.setText(findTestObject('Object Repository/Page_App/input__form-input h-12 w-full rounded-sm bo_f18aed_1_2_3_4'), '')

WebUI.click(findTestObject('Object Repository/Page_App/input__check'))

WebUI.click(findTestObject('Object Repository/Page_App/span_Register Employer'))

