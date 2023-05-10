from django.shortcuts import render
from rest_framework import generics, status
from .serializers import QuestionSerializer, UserSerializer
from .models import Question, User
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class QuestionView(generics.CreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class GetQuestions(APIView):
    serializer_class = QuestionSerializer
    lookup_user_kwarg = "user_id"
    lookup_page_kwarg = "page"
    
    def get(self, request, format=None):
        user_id = request.GET.get(self.lookup_user_kwarg)
        page = int(request.GET.get(self.lookup_page_kwarg))
        if user_id != None:
            questions = Question.objects.filter(user_id=user_id).order_by('-created_at')
            if len(questions) > 0:
                if (page == None): 
                    page = 0
                page_start = page * 5
                page_end = (page + 1) * 5
                questions = questions[page_start:page_end]
                data = QuestionSerializer(questions, many=True).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'User Not Found': 'Invalid "user_id"'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': '"user_id" parameter cannot be empty'}, status=status.HTTP_400_BAD_REQUEST)

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GetUsers(APIView):
    serializer_class = UserSerializer
    def get(self, request, format=None):
        user_id = request.GET.get(self.lookup_user_kwarg)
        if user_id != None:
            users = User.objects.all()
            if len(users) > 0:
                data = UserSerializer(users, many=True).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'User Not Found': 'Invalid "user_id"'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': '"user_id" parameter cannot be empty'}, status=status.HTTP_400_BAD_REQUEST)