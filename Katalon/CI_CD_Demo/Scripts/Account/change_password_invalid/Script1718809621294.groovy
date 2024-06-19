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

WebUI.navigateToUrl('http://localhost:5173/sign_in')

WebUI.setText(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'), 'hoang.nguyenk20@hcmut.edu.vn')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'), 
    'hk2K0obNy+UMbJIHJDm7BkkkmouD4uPumfdejAHSIK8=')

WebUI.click(findTestObject('Object Repository/Page_App/span_Sign In with Email'))

WebUI.click(findTestObject('Object Repository/Page_App/div_Viet'))

WebUI.click(findTestObject('Object Repository/Page_App/div_Settings'))

WebUI.setEncryptedText(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'), 
    'v6Bn19YnmvoIXUrk+ymFc+7N6ewLZYGy')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'), 
    '5lL1qnKF77CeoEhcqnDDHIhcdQFAAzuXgiYH7twAOyE=')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_App/input_Viet_form-input h-12 w-full rounded-s_87e3dd_1'), 
    '5lL1qnKF77CeoEhcqnDDHIhcdQFAAzuXgiYH7twAOyE=')

WebUI.click(findTestObject('Object Repository/Page_App/span_Update new password'))

