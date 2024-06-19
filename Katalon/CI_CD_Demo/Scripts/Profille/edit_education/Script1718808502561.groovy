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

WebUI.navigateToUrl('http://localhost:5173/')

WebUI.click(findTestObject('Object Repository/Page_App/button_Sign inSign up'))

WebUI.setText(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'), 'hoang.nguyenk20@hcmut.edu.vn')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'), 'hk2K0obNy+UMbJIHJDm7BkkkmouD4uPumfdejAHSIK8=')

WebUI.click(findTestObject('Object Repository/Page_App/div_By signing in, you agree to FITviecs Te_2b0a49'))

WebUI.click(findTestObject('Object Repository/Page_App/button_Sign In with Email'))

WebUI.click(findTestObject('Object Repository/Page_App/button_Update profile'))

WebUI.click(findTestObject('Object Repository/Page_App/circle'))

WebUI.setText(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'), 'HCMUS')

WebUI.setText(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'), 'Software Engineering')

WebUI.click(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'))

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_App/select_Month123456789101112'), '5', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_App/select_Year20242023202220212020201920182017_9dbb72'), 
    '2020', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_App/select_Month123456789101112_1'), '5', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_App/select_Year20242023202220212020201920182017_9dbb72_1'), 
    '2024', true)

WebUI.click(findTestObject('Object Repository/Page_App/button_Save'))

