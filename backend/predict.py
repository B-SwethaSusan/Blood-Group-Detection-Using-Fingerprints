# import sys
# import json
# import os
# import numpy as np
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# from tensorflow.keras.applications.imagenet_utils import preprocess_input

# def predict_blood_group(img_path, model_path):
#     labels = {0: 'A+', 1: 'A-', 2: 'AB+', 3: 'AB-', 4: 'B+', 5: 'B-', 6: 'O+', 7: 'O-'}
    
#     if not os.path.exists(img_path):
#         return {"error": "Image file not found"}

#     if not os.path.exists(model_path):
#         return {"error": "Model file not found"}

#     model = load_model(model_path)

#     img = image.load_img(img_path, target_size=(256, 256))
#     x = image.img_to_array(img)
#     x = np.expand_dims(x, axis=0)
#     x = preprocess_input(x)

#     result = model.predict(x)
#     predicted_class = np.argmax(result)
#     predicted_label = labels[predicted_class]
#     confidence = float(result[0][predicted_class]) * 100

#     return {"blood_group": predicted_label, "confidence": confidence}

# if __name__ == "__main__":
#     img_path = sys.argv[1]
#     model_path = sys.argv[2]
#     prediction = predict_blood_group(img_path, model_path)
#     print(json.dumps(prediction))


# import sys
# import json
# import os
# import numpy as np
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# from tensorflow.keras.applications.imagenet_utils import preprocess_input

# def predict_blood_group(img_path, model_path):
#     labels = {0: 'A+', 1: 'A-', 2: 'AB+', 3: 'AB-', 4: 'B+', 5: 'B-', 6: 'O+', 7: 'O-'}

#     print("✅ Checking image path:", img_path)
#     print("✅ Checking model path:", model_path)

#     if not os.path.exists(img_path):
#         print("❌ Image file not found")
#         return json.dumps({"error": "Image file not found"})  # ✅ Return JSON format

#     if not os.path.exists(model_path):
#         print("❌ Model file not found")
#         return json.dumps({"error": "Model file not found"})  # ✅ Return JSON format

#     model = load_model(model_path)
#     print("✅ Model loaded successfully")

#     img = image.load_img(img_path, target_size=(256, 256))
#     x = image.img_to_array(img)
#     x = np.expand_dims(x, axis=0)
#     x = preprocess_input(x)

#     result = model.predict(x)
#     predicted_class = np.argmax(result)

#     print("📢 Raw Model Output:", result)
#     print("📢 Predicted Class Index:", predicted_class)

#     predicted_label = labels.get(predicted_class, "Unknown")
#     confidence = float(result[0][predicted_class]) * 100

#     print("✅ Predicted Label:", predicted_label)
#     print("✅ Confidence Score:", confidence)

#     output = json.dumps({"blood_group": predicted_label, "confidence": confidence})
#     print(output)  # ✅ Ensure this is printed

#     return output

# if __name__ == "__main__":
#     img_path = sys.argv[1]
#     model_path = sys.argv[2]
#     print(predict_blood_group(img_path, model_path))  # ✅ Print JSON output

# last
# import sys
# import json
# import os
# import numpy as np
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# from tensorflow.keras.applications.imagenet_utils import preprocess_input

# # ✅ Fix UnicodeEncodeError for Windows
# sys.stdout.reconfigure(encoding='utf-8')

# def predict_blood_group(img_path, model_path):
#     labels = {0: 'A+', 1: 'A-', 2: 'AB+', 3: 'AB-', 4: 'B+', 5: 'B-', 6: 'O+', 7: 'O-'}
    
#     if not os.path.exists(img_path):
#         return {"error": "Image file not found"}

#     if not os.path.exists(model_path):
#         return {"error": "Model file not found"}

#     model = load_model(model_path)

#     img = image.load_img(img_path, target_size=(256, 256))
#     x = image.img_to_array(img)
#     x = np.expand_dims(x, axis=0)
#     x = preprocess_input(x)

#     result = model.predict(x)
#     predicted_class = np.argmax(result)
#     predicted_label = labels[predicted_class]
#     confidence = float(result[0][predicted_class]) * 100

#     return {"blood_group": predicted_label, "confidence": confidence}

# if __name__ == "__main__":
#     img_path = sys.argv[1]
#     model_path = sys.argv[2]
#     prediction = predict_blood_group(img_path, model_path)
#     print(json.dumps(prediction))

import sys
import json
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.imagenet_utils import preprocess_input

# ✅ Fix UnicodeEncodeError for Windows
sys.stdout.reconfigure(encoding='utf-8')

def predict_blood_group(img_path, model_path):
    # ✅ Load class indices dynamically
    with open("class_indices.json", "r") as f:
        labels = json.load(f)

    # Reverse mapping: index → class name
    labels = {v: k for k, v in labels.items()}

    if not os.path.exists(img_path):
        return {"error": "Image file not found"}

    if not os.path.exists(model_path):
        return {"error": "Model file not found"}

    model = load_model(model_path)

    img = image.load_img(img_path, target_size=(256, 256))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)

    result = model.predict(x)
    predicted_class = np.argmax(result)
    predicted_label = labels[predicted_class]
    confidence = float(result[0][predicted_class]) * 100

    return {"blood_group": predicted_label, "confidence": confidence}

if __name__ == "__main__":
    img_path = sys.argv[1]
    model_path = sys.argv[2]
    prediction = predict_blood_group(img_path, model_path)
    print(json.dumps(prediction))
