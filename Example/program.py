import GoldenFace
import cv2


# def find_golden_ratio(images/photos_for_search/girl3.jpegge):
#     color_a = (255, 255, 0)
#     color_b = (0, 0, 255)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     analysis.drawFaceCover(color_a)
#     # cv2.imshow("Image", analysis.img)
#     key = cv2.waitKey(1000)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     analysis.drawTZM(color_b)
#     # cv2.imshow("Image", analysis.img)
#     key = cv2.waitKey(1000)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     analysis.drawTGSM(color_b)
#     # cv2.imshow("Image", analysis.img)
#     key = cv2.waitKey(1000)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     analysis.drawVFM(color_b)
#     # cv2.imshow("Image", analysis.img)
#     key = cv2.waitKey(1000)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     analysis.drawTSM(color_b)
#     # cv2.imshow("Image", analysis.img)
#     key = cv2.waitKey(1000)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     analysis.drawLC(color_b)
#     # cv2.imshow("Image", analysis.img)
#     key = cv2.waitKey(1000)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     analysis.drawLandmarks(color_b)
#     # cv2.imshow("Image", analysis.img)
#     key = cv2.waitKey(1000)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     analysis.drawLandmark(color_a)
#     # cv2.imshow("Image", analysis.img)
#     key = cv2.waitKey(1000)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     analysis.drawMask(color_a)
#     # cv2.imshow("Image", analysis.img)
#     key = cv2.waitKey(1000)
#
#     analysis = GoldenFace.goldenFace(images/photos_for_search/girl3.jpegge)
#     goldenRatio = analysis.geometricRatio()
#
#     print(goldenRatio)

import GoldenFace
import cv2


color_a = (255,255,0)
color_b = (0,0,255)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
analysis.drawFaceCover(color_a)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
analysis.drawTZM(color_b)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
analysis.drawTGSM(color_b)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
analysis.drawVFM(color_b)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
analysis.drawTSM(color_b)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
analysis.drawLC(color_b)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
analysis.drawLandmarks(color_b)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
analysis.drawLandmark(color_a)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
analysis.drawMask(color_a)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)

analysis = GoldenFace.goldenFace("images/photos_for_search/girl3.jpeg")
goldenRatio = analysis.geometricRatio()

text = "Golden Ratio: %" + str(int(goldenRatio))

image = cv2.putText(analysis.img, text, (0,400), cv2.FONT_HERSHEY_SIMPLEX, 1, color_a, 2)
cv2.imshow("Image",analysis.img)
key = cv2.waitKey(1000)
print(text)