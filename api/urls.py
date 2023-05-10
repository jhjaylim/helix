
from django.urls import path
from .views import QuestionView, GetQuestions, UserView, GetUsers

urlpatterns = [
    path('question', QuestionView.as_view()),
    path('questions', GetQuestions.as_view()),
    path('user', UserView.as_view()),
    path('users', GetUsers.as_view()),
]
