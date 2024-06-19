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

WebUI.click(findTestObject('Object Repository/Page_App/div_1,031 IT Jobs For Cht Developers All Ci_157c3b'))

WebUI.click(findTestObject('Object Repository/Page_App/button_Sign inSign up'))

WebUI.setText(findTestObject('Object Repository/Page_App/input__title'), 'hoang.nguyenk20@hcmut.edu.vn')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_App/input__title'), 'hk2K0obNy+UMbJIHJDm7BkkkmouD4uPumfdejAHSIK8=')

WebUI.click(findTestObject('Object Repository/Page_App/span_Sign In with Email'))

WebUI.click(findTestObject('Object Repository/Page_App/button_Update profile'))

WebUI.click(findTestObject('Object Repository/Page_App/p_Introduce your strengths and years of experience'))

WebUI.click(findTestObject('Object Repository/Page_App/svg_Your personal link_lucide lucide-circle_9b41fb_1_2'))

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_s'), 's')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_so'), 'so')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_som'), 'som')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_some'), 'some')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_somet'), 'somet')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_someth'), 'someth')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_somethi'), 'somethi')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_somethin'), 'somethin')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_somethi'), 'somethi')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_someth'), 'someth')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_somet'), 'somet')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_some'), 'some')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_som'), 'som')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_so'), 'so')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_s'), 's')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_Tips_content'), '')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_v'), 'v')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_vi'), 'vi')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_vip'), 'vip')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_vipr'), 'vipr')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_vip'), 'vip')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_vipp'), 'vipp')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_vippr'), 'vippr')

WebUI.setText(findTestObject('Object Repository/Page_App/textarea_vippro'), 'vippro')

WebUI.click(findTestObject('Object Repository/Page_App/button_Save'))

WebUI.click(findTestObject('Object Repository/Page_App/p_Share your background education'))

WebUI.click(findTestObject('Object Repository/Page_App/svg_Your personal link_lucide lucide-circle_9b41fb_1_2'))

WebUI.setText(findTestObject('Object Repository/Page_App/input__title'), 'HCMUS')

WebUI.click(findTestObject('Object Repository/Page_App/input__title'))

WebUI.setText(findTestObject('Object Repository/Page_App/input__title'), 'software engineering')

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_App/select_Month123456789101112'), '6', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_App/select_Year20242023202220212020201920182017_9dbb72'), 
    '2020', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_App/select_Month123456789101112_1'), '6', true)

WebUI.click(findTestObject('Object Repository/Page_App/div_YearYear2024202320222021202020192018201_f29ec0'))

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_App/select_Year20242023202220212020201920182017_9dbb72_1'), 
    '2024', true)

WebUI.click(findTestObject('Object Repository/Page_App/button_Save'))

WebUI.click(findTestObject('Object Repository/Page_App/path'))

WebUI.click(findTestObject('Object Repository/Page_App/button_Cancel'))

